export default function Loading({ children, ...restProps }) {
    return (
        <div className='bg-black w-screen h-screen flex justify-center items-center'>
            {children}
        </div>
    )
}

Loading.Spinner = function LoadingSpinner({ ...restProps }) {
    return (
        <div className='spinner'>
        </div>
    )
}

Loading.Image = function LoadingImage({ picture, ...restProps }) {
    return (
        <img className="w-[50px] absolute"
            src={picture.type} alt="user" />
    )
}