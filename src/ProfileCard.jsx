import Harshil from "./Harshil_Profile.jpeg"
import Muskan from "./Muskan_Photos.jpg"
import Janvi from "./janvi.JPG"
import "./ProfileCard.css"
import {BsLinkedin, BsTwitter, BsGithub, BsDiscord} from 'react-icons/bs'
const ProfileCard = ({fname,lname})=>{
    return <>
        <div className="d-flex justify-content-center align-items-center my-5 gap-5">
            <div className="w-25">
        <div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden ">
						<div className="banner" ></div>
						<img src={Harshil} alt="" className="img-circle mx-auto mb-3" />
						<h3 className="mb-4">Harshil Khamar</h3>
						<div className="text-left mb-4">
							<p className="mb-2"><i className="fa fa-envelope mr-2"></i> harshilkhamar1@gmail.com</p>
							<p className="mb-2"><i className="fa fa-map-marker-alt mr-2"></i> Ahmedabad</p>
						</div>
						<div className="social-links d-flex justify-content-center">
                            <a href="#!" className="mx-2"><BsDiscord className="fs-2" /></a>
							<a href="#!" className="mx-2"><BsGithub className="fs-2" /></a>
                            <a href="#!" className="mx-2"><BsLinkedin className="fs-2" /></a>
                            <a href="#!" className="mx-2"><BsTwitter className="fs-2" /></a>
						</div>
					</div>
            </div>
            <div className="w-25">
                <div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden ">
						<div className="banner1" ></div>
						<img src={Muskan} alt="" className="img-circle mx-auto mb-3" />
						<h3 className="mb-4">Muskan Rawat</h3>
						<div className="text-left mb-4">
							<p className="mb-2"><i className="fa fa-envelope mr-2"></i> muskan07121@gmail.com</p>
							<p className="mb-2"><i className="fa fa-map-marker-alt mr-2"></i> Ahmedabad</p>
						</div>
						<div className="social-links d-flex justify-content-center">
                            <a href="#!" className="mx-2"><BsDiscord className="fs-2" /></a>
							<a href="#!" className="mx-2"><BsGithub className="fs-2" /></a>
                            <a href="#!" className="mx-2"><BsLinkedin className="fs-2" /></a>
                            <a href="#!" className="mx-2"><BsTwitter className="fs-2" /></a>
						</div>
				</div>
            </div>
			<div className="w-25">
                <div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden ">
						<div className="banner2" ></div>
						<img src={Janvi} alt="" className="img-circle mx-auto mb-3" />
						<h3 className="mb-4">Janvi Thakkar</h3>
						<div className="text-left mb-4">
							<p className="mb-2"><i className="fa fa-envelope mr-2"></i> janvithakkar.583@gmail.com</p>
							<p className="mb-2"><i className="fa fa-map-marker-alt mr-2"></i> Ahmedabad</p>
						</div>
						<div className="social-links d-flex justify-content-center">
                            <a href="#!" className="mx-2"><BsDiscord className="fs-2" /></a>
							<a href="#!" className="mx-2"><BsGithub className="fs-2" /></a>
                            <a href="#!" className="mx-2"><BsLinkedin className="fs-2" /></a>
                            <a href="#!" className="mx-2"><BsTwitter className="fs-2" /></a>
						</div>
				</div>
            </div>
        </div>
    </>
}

export default ProfileCard