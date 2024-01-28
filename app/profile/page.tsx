import ProfileCard from '../ui/profile/profile-card';

// Imports for Testing Data
import johnDoe from '@/test-data/test-profile';

export default function Profile() {
    // const user = useContext();

    return(
        <>
            <div>
                <ProfileCard profile={johnDoe}/>
            </div>
        </>
    )
}