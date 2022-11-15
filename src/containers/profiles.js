import { Profile } from '../components'
import { ProfilesData } from '../fixtures/ProfilesData'


export default function ProfilesContainer() {
    return (
        <>
            <Profile>
                <Profile.Container>
                    {ProfilesData.map(item => (
                        <Profile.Card key={item.id}>
                            <Profile.Image picture={item.picture} />
                            <Profile.Name>{item.name}</Profile.Name>
                            <Profile.Bundle>{item.bundle}</Profile.Bundle>
                        </Profile.Card>
                    ))}
                </Profile.Container>
            </Profile>
        </>
    )
}