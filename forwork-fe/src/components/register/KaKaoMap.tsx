'use client';

import { Map } from "react-kakao-maps-sdk";
import useLocation from "@/src/hooks/useLocation";

interface Props {
    address: string | "";
}

const KaKaoMap = ({ address }: Props) => {
    const {isLoaded, setIsLoaded, location, setLocation} = useLocation(address)
    return (
        <div>
            {isLoaded && address !== "" ? (
                <Map
                    center={{ lat: Number(location.latitude), lng: Number(location.longitude) }}
                    style={{ width: '100%', height: '240px' }}
                    level={3}
                />
            ) : (
                <p>카카오 맵을 불러오는 중...</p>
            )}
        </div>
    );
};

export default KaKaoMap;
