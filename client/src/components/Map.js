import React, { useState, useEffect, useContext } from "react";
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Subscription } from 'react-apollo';
import sha1 from 'sha1';

import { CREATE_DRAFT, UPDATE_DRAFT_LOCATION, GET_PINS, CREATE_PIN, SET_PIN, DELETE_PIN, CREATE_COMMENT } from '../store/actionTypes';
import { PIN_ADDED_SUBSCRIPTION, PIN_DELETED_SUBSCRIPTION, PIN_UPDATED_SUBSCRIPTION } from '../graphql/subscriptions';
import Blog from    './Blog';
import PinIcon from './PinIcon';
import Context from '../store/context';
import { useClient } from '../helpers/client';
import { GET_PINS_QUERY } from '../graphql/queries';
import { DELETE_PIN_MUTATION } from '../graphql/mutations';
import { differenceInHours } from "date-fns";
import axios from "axios";

const INITIAL_VIEWPORT = {
    latitude: 36.1577,
    longitude: -115.1376,
    zoom: 10
};

const Map = ({ classes }) => {
    const client = useClient();
    const mobileSize = useMediaQuery('(max-width: 650px)');
    const { state, dispatch } = useContext(Context);
    useEffect(() => {
        getPins()
    }, []);

    const [ viewport, setViewport ] = useState(INITIAL_VIEWPORT);
    const [ userPosition, setUserPosition ] = useState(null);
    useEffect(() => {
        getUserPosition()
    }, []);
    const [ popup, setPopup ] = useState(null);

    // remove popup if author deletes pin while another user is viewing it
    useEffect(() => {
        const pinExists = popup && state.pins.findIndex(pin => pin._id === popup._id) > -1;
        if (!pinExists) setPopup(null);
    }, [state.pins.length]);

    const getUserPosition = () => {
        if('geolocation' in navigator) {
            window.navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setViewport({ ...viewport, latitude, longitude, zoom: 13 });
                setUserPosition({ latitude, longitude });
            })
        }
    };

    const getPins = async () => {
        const { getPins } = await client.request(GET_PINS_QUERY);
        console.log("PINS", getPins)
        dispatch({ type: GET_PINS, payload: getPins})
    }

    const handleMapClick = ({ lngLat, leftButton }) => {
        if(!leftButton) return;
        if (!state.draft) {
            dispatch({ type: CREATE_DRAFT })
        }
        const [longitude, latitude] = lngLat;
        dispatch({ type: UPDATE_DRAFT_LOCATION, payload: { latitude, longitude } });
    };

    const onMarkerDragStart = event => {
        // this._logDragEvent('onDragStart', event);
    };
    
    const onMarkerDrag = event => {
        // this._logDragEvent('onDrag', event);
    };
    
    const onMarkerDragEnd = ({ lngLat }) => {
        // this._logDragEvent('onDragEnd', lngLat);
        const [longitude, latitude] = lngLat;
        dispatch({ type: UPDATE_DRAFT_LOCATION, payload: { latitude, longitude } });
    };

    const highlightOldPin = pin => {
        const olderThanHours = differenceInHours(Date.now(), +pin.createdAt) >= 1
        return olderThanHours ? 'black' : 'blue'
    };

    const handleSelectPin = pin => {
        setPopup(pin);
        dispatch({ type: SET_PIN, payload: pin})
    };

    const isAuthUser = () => state.currentUser._id === popup.author._id;

    const handleDeletePin = async pin => {
        try {
            const variables = { pinId: pin._id };
            await handleImageDelete(pin)
            await client.request(DELETE_PIN_MUTATION, variables);
            setPopup(null);
        } catch (error) {
            throw new Error("Error deleting pin:", error)
        }
    };

    const handleImageDelete = async (pin) => {
        try {
            const UNIXtimestamp = Date.now();
            const signaturePayload = `public_id=${pin.image.publicId}&timestamp=${UNIXtimestamp}`;
            const signature = sha1(signaturePayload + process.env.REACT_APP_CLOUDINARY_API_SECRET);
            const deleteUrl = `https://api.cloudinary.com/v1_1/jossendal-development/image/destroy?public_id=${pin.image.publicId}&api_key=${process.env.REACT_APP_CLOUDINARY_API_KEY}&timestamp=${UNIXtimestamp}&signature=${signature}`;

            const deletedImage = await axios.post(deleteUrl);
            if (deletedImage.data.result !== 'ok') throw new Error('Delete image failed', deletedImage)
        } catch (err) {
            throw new Error("ERROR: delete image failed: ", err);
        }
    };

    return (
        <div className={mobileSize ? classes.rootMobile: classes.root}>
            <ReactMapGL 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN}
                width="100vw"
                height="calc(100vh - 64px)"
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onViewportChange={newViewport => setViewport(newViewport)}
                onClick={handleMapClick}
                scrollZoom={!mobileSize}
                { ...viewport }
            >
                {/* controls */}
                <div className={classes.navigationControl}>
                    <NavigationControl onViewportChange={newViewport => setViewport(newViewport)} />
                </div>
                {/* user pin */}
                {userPosition && (
                    <Marker
                        latitude={userPosition.latitude}
                        longitude={userPosition.longitude}
                        offsetLeft={-5}
                        offsetTop={-28}
                    >
                        <PinIcon color="rgba(255,0,0,0.7" size={30} />
                    </Marker>
                )}
                {/* draft pin */}
                {state.draft && (
                    <Marker
                        latitude={state.draft.latitude}
                        longitude={state.draft.longitude}
                        draggable
                        onDragStart={onMarkerDragStart}
                        onDrag={onMarkerDrag}
                        onDragEnd={onMarkerDragEnd}
                        offsetLeft={-5}
                        offsetTop={-28}
                    >
                        <PinIcon color="hotpink" size={25} />
                    </Marker>
                )}
                {/* created pins array */}
                {state.pins.length > 0 && state.pins.map(pin => (
                    <Marker
                        key={pin._id}
                        latitude={pin.latitude}
                        longitude={pin.longitude}
                        offsetLeft={-5}
                        offsetTop={-28}
                    >
                        <PinIcon onClick={() => handleSelectPin(pin)} size={25} color={highlightOldPin(pin)} />
                    </Marker>
                ))}
                {/*  popup dialog for created pins */}
                {popup && (
                    <Popup
                        anchor="top"
                        latitude={popup.latitude}
                        longitude={popup.longitude}
                        closeOnClick={false}
                        onClose={() => setPopup(null)}
                    >
                        <img
                            className={classes.popupImage}
                            src={popup.image.imageURL}
                            alt={popup.title}
                        />
                        <div className={classes.popupTab}>
                            <Typography>
                                {popup.latitude.toFixed(6)}, {popup.longitude.toFixed(6)}
                            </Typography>
                            {isAuthUser() && (
                                <Button onClick={() => handleDeletePin(popup)}>
                                    <FontAwesomeIcon icon="trash-alt" className={classes.deleteIcon} />
                                </Button>
                            )}
                        </div>
                    </Popup>
                )}
            </ReactMapGL>
            {/* Subscriptions fro creating updating and deleting pins */}
            <Subscription
                subscription={PIN_ADDED_SUBSCRIPTION}
                onSubscriptionData={({ subscriptionData }) => {
                    const { pinAdded } = subscriptionData.data;
                    console.log("PIN ADDED", { pinAdded })
                    dispatch({ type: CREATE_PIN, payload: pinAdded })
                }}
            />
            <Subscription
                subscription={PIN_UPDATED_SUBSCRIPTION}
                onSubscriptionData={({ subscriptionData }) => {
                    const { pinUpdated } = subscriptionData.data;
                    console.log("PIN UPDATED", { pinUpdated })
                    dispatch({ type: CREATE_COMMENT, payload: pinUpdated })
                }}
            />
            <Subscription
                subscription={PIN_DELETED_SUBSCRIPTION}
                onSubscriptionData={({ subscriptionData }) => {
                    const { pinDeleted } = subscriptionData.data;
                    console.log("PIN DELETED", { pinDeleted })
                    dispatch({ type: DELETE_PIN, payload: pinDeleted })
                }}
            />
            {/* Blog area for pin content*/}
            <Blog />
        </div>
    )
};

const styles = {
  root: {
    display: "flex"
  },
  rootMobile: {
    display: "flex",
    flexDirection: "column-reverse"
  },
  navigationControl: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "1em"
  },
  deleteIcon: {
    color: "red"
  },
  popupImage: {
    padding: "0.4em",
    height: 200,
    width: 200,
    objectFit: "cover"
  },
  popupTab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
};

export default withStyles(styles)(Map);
