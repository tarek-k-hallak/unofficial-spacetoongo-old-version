
export default function ContentContainer({ content }) {
    return (
        <div className='font-primary bg-background'>
            {
                content.map(item => (
                    <div key={item.id}>
                        {item.id}
                    </div>
                ))
            }
        </div>
    )
}
