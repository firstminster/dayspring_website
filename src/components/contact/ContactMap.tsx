import React, { useState } from "react";
import {
    GoogleMap,
    Marker,
    InfoWindow,
    useLoadScript,
} from "@react-google-maps/api";

const ContactMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    });

    const [mapRef, setMapRef] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [infoWindowData, setInfoWindowData] = useState();

    const markers = [
        {
            address:
                "Plot 27/29 E.C Ezeka Crescent, World Bank Housing Estate, Aba, Abia State.",
            lat: 5.12808,
            lng: 7.3351,
        },
    ];

    const onMapLoad = (map: any) => {
        setMapRef(map);
        const bounds = new google.maps.LatLngBounds();
        markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        map.fitBounds(bounds);
    };

    // const handleMarkerClick = (id: number, lat: number, lng: number, address: string) => {
    //     mapRef?.panTo({ lat, lng });
    //     setInfoWindowData({ id, address });
    //     setIsOpen(true);
    // };
    return (
        <section className="flex flex-col items-center xl:items-start mt-10 xl:mt-0">
            {/* Address */}
            <div className="w-[310px] md:w-[550px] text-[15px] md:text-lg">
                <p className="">
                    Alternatively, you can email us at info@dayspringacademy.co or take a
                    visit to our school.
                </p>
            </div>
            {/* Map */}
            <div className="mt-[76px] lg:mt-14 xl:mt-[90px] w-[305px] h-[262px] md:w-[673px] md:h-[712px]">
                {/* {!isLoaded ? (
          <Spinner />
        ) : ( */}
                {/* <GoogleMap
                    mapContainerClassName="map-container"
                    onLoad={onMapLoad}
                    onClick={() => setIsOpen(false)}
                >
                    {markers.map(({ address, lat, lng }, ind) => (
                        <Marker
                            key={ind}
                            position={{ lat, lng }}
                            onClick={() => {
                                handleMarkerClick(ind, lat, lng, address);
                            }}
                        >
                            {isOpen && infoWindowData?.id === ind && (
                                <InfoWindow
                                    onCloseClick={() => {
                                        setIsOpen(false);
                                    }}
                                >
                                    <h3>{infoWindowData.address}</h3>
                                </InfoWindow>
                            )}
                        </Marker>
                    ))}
                </GoogleMap> */}
                {/* )} */}
            </div>
        </section>
    )
}

export default ContactMap