import { TiHeartOutline } from "react-icons/ti";

export default function Footer() {
    return (
        <div className="mt-auto">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">&copy; 2023 Built with <TiHeartOutline className="text-red-500" /> by Fiza</div>
            </div>
        </div>
    )
}