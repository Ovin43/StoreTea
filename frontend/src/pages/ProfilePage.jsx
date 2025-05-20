import { Camera, LogOut, Mail, Settings, User2 } from "lucide-react"
import { useAuthStore } from "../store/useAuthStore"
import { useState } from "react";

const ProfilePage= () =>{

    const{logout,authUser,updateProfile , isUpdatingProfile}=useAuthStore();
    const [selectedImg, setSelectedImg] = useState(null);

    const handleClick = () => {
        document.getElementById('hiddenFileInput').click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();

                reader.readAsDataURL(file);

                reader.onload = async () => {
                const base64Image = reader.result;
                setSelectedImg(base64Image);
                await updateProfile({ profilPic: base64Image, userId:authUser._id});
                 };
            };  
    };

    return(
        <>
            <section className="profile_page_main">
                <div className="profile_page">
                    <div className="profile_page_photo_div">
                        <div className="profile_page_photo-ring">
                            <div className="profile_page_photo">
                                <img src={selectedImg || authUser.profilPic || "img/gojo.jpg"} alt="Profile"/>
                                <input 
                                type="file" 
                                accept="image/*" 
                                id="hiddenFileInput" 
                                style={{ display: 'none' }}  
                                onChange={handleFileChange}
                                disabled={isUpdatingProfile}/>

                                <Camera stroke="white" className="profile_page_photo_button" onClick={handleClick}/>
                            </div>
                        </div>
                    </div>
                    <div className="profile_page_content">
                        <div>{isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}</div>
                    </div>
                    <div className="profile_page_name">
                        <div className="profile_page_name_box">
                            <div className="profile_page_name_box_head">
                                <User2/>
                                <div className="profile_page_name_box_head_name">NAME</div> 
                            </div>
                            <div className="profile_page_name_box_output"> {authUser.fullName}</div>
                        </div>
                    </div>
                    <div className="profile_page_email">
                        <div className="profile_page_email_head">
                            <Mail/>
                            <div className="profile_page_email_head_name">Email</div>
                        </div>
                        <div className="profile_page_email_output"> {authUser.email}</div>
                    </div>
                    <div className="profile_page_button">
                        <div className="profile_page_setting">
                            <button onClick={logout}>
                                <Settings/>
                            </button>
                        </div>
                        <div className="profile_page_logout">
                            <button onClick={logout}>
                                <LogOut/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default ProfilePage