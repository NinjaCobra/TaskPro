import { useAuth } from 'hooks/useAuth';
import avaDark from '../../images/user_dark.svg';
import avaLight from '../../images/user_light.svg';
import avaViolet from '../../images/user_violet.svg';
import { Oval } from  'react-loader-spinner'

export const Avatar = ({size, onClick, isLoading, preload}) => {
    const {user} = useAuth();
    const defaultAvatar = {
        dark:avaDark,
        light:avaLight,
        violet:avaViolet
    }
    let src = user.avatar? user.avatar : defaultAvatar[user.theme];
    if(preload) src=preload;

    const mainColor = {
        dark:"#bedbb0",
        light:"#bedbb0",
        violet:"#5255bc"
    }

    return(
        <>
        {isLoading ?
            <Oval
            height={80}
            width={80}
            color={mainColor[user.theme]}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#eee"
            strokeWidth={2}
            strokeWidthSecondary={2}
            /> :
            <img 
            src={src} 
            alt={user.name}
            width={size} 
            height={size} 
            onClick={onClick} 
            style={{borderRadius:"5px", cursor:"pointer"}}
            /> 
        }
        </>
        
    )
}