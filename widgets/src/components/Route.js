import React,{useState , useEffect} from 'react';

export default  ({path , children}) =>{
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const onLocationChange = ()=>{
        setCurrentPath(window.location.pathname);
    }
    useEffect(() =>{
        
        window.addEventListener('popstate', onLocationChange )
    } ,[])

    return window.location.pathname === path ? children : null;
}