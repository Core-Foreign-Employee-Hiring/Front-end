import {useEffect, useState} from "react";
import {AddressType} from "@/src/types/register";

const useLocation = (address1: string | null | undefined) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [location, setLocation] = useState<AddressType>({latitude: 0, longitude: 0});

    useEffect(() => {
        console.log("🚀 useEffect 실행됨");

        if (typeof window === 'undefined') {
            console.log("❌ 서버에서 실행 중 - 클라이언트에서만 실행 필요");
            return;
        }

        console.log("✅ 클라이언트에서 실행 중");

        const apiKey = process.env.NEXT_PUBLIC_KAKAO_KEY;
        if (!apiKey) {
            console.log("❌ 카카오 API 키가 설정되지 않았습니다.");
            return;
        }

        console.log("🔑 카카오 API 키:", apiKey);

        // ✅ 이미 로드된 경우 로드하지 않음
        if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
            console.log("✅ 이미 카카오 API 로드됨");
            setIsLoaded(true);
            return;
        }

        // ✅ 카카오맵 스크립트 추가
        const script = document.createElement("script");
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            console.log("✅ 카카오 API 스크립트 로드 완료");
            if (window.kakao && window.kakao.maps) {
                window.kakao.maps.load(() => {
                    console.log("✅ 카카오 맵 API 로드 완료");
                    setIsLoaded(true);
                });
            } else {
                console.log("❌ 카카오 API 로드 실패 - `window.kakao` 없음");
            }
        };

        script.onerror = () => {
            console.log("❌ 카카오 API 스크립트 로드 실패");
        };

        return () => {
            console.log("🗑️ 스크립트 제거");
            document.head.removeChild(script);
        };
    }, []);

    const getAddressCoords = (address: string) => {
        return new Promise((resolve, reject) => {
            if (typeof window === 'undefined' || !window.kakao || !window.kakao.maps || !window.kakao.maps.services) {
                console.log("❌ 카카오 API가 아직 로드되지 않았습니다.");
                reject("카카오 API 로드 실패");
                return;
            }

            console.log("📌 Geocoder 실행됨");
            const geocoder = new window.kakao.maps.services.Geocoder();

            geocoder.addressSearch(address, (result, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    console.log("📍 변환된 주소:", result[0]);
                    const { x, y } = result[0];
                    resolve({ latitude: y, longitude: x });
                } else {
                    console.log("adress", address1)
                    console.log("❌ 주소 변환 실패: 주소를 찾을 수 없습니다.");
                    reject("주소 변환 실패");
                }
            });
        });
    };

    useEffect(() => {
        if (!isLoaded || !address1 || address1 === "") return;

        getAddressCoords(address1)
            .then((coords: any) => {
                console.log("📌 좌표 변환 성공:", coords);
                setLocation(coords);
            })
            .catch((err) => {
                console.log("❌ 좌표 변환 오류:", err);
            });
    }, [address1, isLoaded]);

    return {isLoaded, setIsLoaded, location, setLocation};
}
export default useLocation
