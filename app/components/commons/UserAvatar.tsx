import { getInitials } from "@/app/utils/stringUtils";
import { FC } from "react";

interface UserAvatarProps {
  userId: string;
  originatorId?: string;
  firstName: string;
  lastName: string;
  size?: 'sm' | 'md';
}

const UserAvatar: FC<UserAvatarProps> = ({
  userId,
  originatorId,
  firstName,
  lastName,
  size = 'md',
}) => {
  const initials = getInitials(firstName, lastName, userId, originatorId);
  const sizeClasses = {
    sm: 'w-7 h-7 text-sm font-extralight',
    md: 'w-10 h-10 text-lg font-medium',
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-avatarBackGround text-white shrink-0 ${sizeClasses[size]} cursor-pointer`}
    >
      <span>{initials}</span>
    </div>
  )
}

export default UserAvatar