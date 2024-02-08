import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react'
import { HiArrowSmRight, HiDocumentText, HiUser } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signOutSuccess } from '../redux/user/userSlice'
import {useSelector} from 'react-redux'

const DashSidebar = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    const [tab, setTab] = useState('')

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location.search]);

  //signout functionality
const handleSignOut = async () => {
  try {
    const res = await fetch('/api/user/signout',{
      method: 'POST',
    })
    const data = await res.json();
    if (!res.ok) {
      console.log(data.message);
    }
    else{
      dispatch(signOutSuccess());
    }
  } catch (error) {
    console.log(error.message)
  }
}
  return (
    <Sidebar className='w-full md:w-56'>
        <SidebarItems>
            <SidebarItemGroup className='flex flex-col gap-1'>
                <Link to={'/dashboard?tab=profile'}>
                <SidebarItem active={tab === 'profile'} 
                  icon={HiUser} 
                  label={currentUser.isAdmin ? 'Admin' : 'User'} 
                  labelColor='dark' 
                  as='div'>
                    Profile
                </SidebarItem>
                </Link>
                {currentUser.isAdmin && 
                  <Link to={'/dashboard?tab=posts'}>
                  <SidebarItem 
                  icon={HiDocumentText}
                  active={tab=== 'posts'} as='div'>
                    Posts
                  </SidebarItem>
                </Link>
                }
               
                <SidebarItem 
                  icon={HiArrowSmRight} 
                  className='cursor-pointer' 
                  onClick={handleSignOut}>
                    Sign Out
                </SidebarItem>
            </SidebarItemGroup>
        </SidebarItems>
    </Sidebar>
  )
}

export default DashSidebar