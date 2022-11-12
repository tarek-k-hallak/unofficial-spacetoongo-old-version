export default function Decor({ children, ...restProps }) {
    return (
        <div className="flex flex-row-reverse items-center justify-between w-full mx-2 lg:max-w-[1200px] max-h-[70px] lg:max-h-[90px]">
            {children}
        </div>
    )
}