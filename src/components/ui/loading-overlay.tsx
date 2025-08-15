import Image from 'next/image';

export function LoadingOverlay({ message = "Loading..." }) {
    return (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="bg-white px-6 py-3 rounded-md flex items-center space-x-2 shadow-md">
               <img src="/icons/loading.svg" alt="Loading Icon" className="mr-3 animate-spin"></img>
                <span className="text-sm text-[#413736] font-bold">{message}</span>
            </div>
        </div>
    );
}