import { Loading } from '../components'
import { ProfilesData } from '../fixtures/ProfilesData'

export default function LoadingContainer() {
    return (
        <Loading >
            <Loading.Image picture={ProfilesData[1].picture} />
            <Loading.Spinner />
        </Loading>
    )
}