'use client'

import styles from '@/app/ui/profile/profile-card.module.css';
import type { Profile } from '@/types/Profile';

interface ProfileCardProps {
    profile: Profile
}

export default function ProfileCard({ profile }: ProfileCardProps) {

    function flip() {
        alert("Clicked")
    }

    return(
        <div className={styles.card} onClick={flip}>
            <div className={styles.inner}>
                <div className={styles.front}>
                    Some Text Front
                </div>
                <div className={styles.back}>
                    Some Text Back
                </div>
            </div>
        </div>
    )
}