import { contact1,contact2, contact3} from "../../assets/images";
import { useState } from "react";

import { coreStrength, Mission } from "../../data";

const About_Us = () => {
	const [title, setTitle] = useState("");
	const [fullName, setFullName] = useState("");
	const [message, setMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	
		// Validate inputs
		if (!title || !fullName || !message) {
		  alert("Please fill in all fields before submitting.");
		  return;
		}
	
		// Clear inputs
		setTitle("");
		setFullName("");
		setMessage("");
	
		// Show success message for 2 seconds
		setSuccessMessage("Message sent successfully!");
		setTimeout(() => setSuccessMessage(""), 2000);
	  };
  return (
   <>

    <section>
        <div className="relative md:mx-[10%]  mx-[2%] pt-[30%] md:pt-[10%]">
          <h1 className="text-center md:text-[60px] text-[25px] font-semibold py-[3%]">Book A Session</h1>
              <div className="md:flex ">
              <div className="flex-col  md:w-1/3">
              <div classname="e-con-inner flex">
				<div classname="elementor-element elementor-element-705a20ad elementor-widget elementor-widget-heading" data-id="705a20ad" data-element_type="widget" data-widget_type="heading.default">
				
				</div>
		<div className="elementor-element elementor-element-850746c e-con-full e-flex e-con e-child" data-id="850746c" data-element_type="container">
		<div className="elementor-element elementor-element-49213c2 e-con-full e-flex e-con e-child" data-id="49213c2" data-element_type="container">
				<div className="elementor-element elementor-element-4822b06 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="4822b06" data-element_type="widget" data-widget_type="icon-list.default">
				<div className="elementor-widget-container">
							<ul className="elementor-icon-list-items space-y-3">
							<li className="elementor-icon-list-item flex">
											<span className="elementor-icon-list-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="La9SoowKGoEUHOnYdJMSEa" cx="24" cy="10.009" r="32.252" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8c9eff"></stop><stop offset=".368" stop-color="#889af8"></stop><stop offset=".889" stop-color="#7e8fe6"></stop><stop offset="1" stop-color="#7b8ce1"></stop></radialGradient><path fill="url(#La9SoowKGoEUHOnYdJMSEa)" d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875 c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0 c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014 c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001 c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236 c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14 c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255 c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823 c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706 C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706 c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823 c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"></path><ellipse cx="30.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="30.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="30.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="17.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse></svg>						</span>
										<span className=" p-3 elementor-icon-list-text">Discord:  </span>
									</li>
								<li className="elementor-icon-list-item flex">
											<a className="flex" href="https://msng.link/o?%20@yourfavoritegirlyyyy=tg">

												<span className="elementor-icon-list-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"></path><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"></path></svg>						</span>
										<span className="p-3 elementor-icon-list-text">Telegram: @asap0077</span>
											</a>
									</li>
								<li className="elementor-icon-list-item flex">
											<a  className="flex " href="https://signal.me/#p/%2B12244549118">

												<span className="elementor-icon-list-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="nYMvCsU2aI2MBCA4ho~Qna" x1="24" x2="24" y1="333.541" y2="293.009" gradientTransform="matrix(1 0 0 -1 0 340)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#nYMvCsU2aI2MBCA4ho~Qna)" d="M35,42H13c-3.866,0-7-3.134-7-7V13c0-3.866,3.134-7,7-7h22c3.866,0,7,3.134,7,7v22 C42,38.866,38.866,42,35,42z"></path><path fill="#fff" d="M11.946,36.554c-0.132,0-0.259-0.052-0.354-0.146c-0.109-0.109-0.162-0.263-0.143-0.416l0.25-1.984 l0.992,0.125l-0.169,1.345l1.345-0.169l0.125,0.992l-1.984,0.25C11.988,36.552,11.967,36.554,11.946,36.554z"></path><path fill="#fff" d="M24,37c-0.799,0-1.603-0.075-2.388-0.224l0.186-0.982c1.247,0.235,2.541,0.267,3.796,0.101 l0.132,0.991C25.156,36.961,24.576,37,24,37z M27.743,36.45l-0.288-0.958c1.218-0.366,2.367-0.924,3.415-1.659l0.574,0.818 C30.309,35.448,29.063,36.053,27.743,36.45z M19.621,36.234c-0.402-0.145-0.8-0.311-1.185-0.494l-2.426,0.306l-0.125-0.992 l2.573-0.324c0.097-0.011,0.195,0.004,0.283,0.047c0.394,0.193,0.804,0.367,1.219,0.517L19.621,36.234z M33.036,33.339 l-0.695-0.719c0.919-0.89,1.687-1.912,2.28-3.038l0.885,0.467C34.862,31.269,34.031,32.376,33.036,33.339z M12.941,32.161 l-0.992-0.125l0.312-2.472c-0.176-0.37-0.337-0.753-0.478-1.14l0.939-0.343c0.146,0.401,0.315,0.797,0.502,1.178 c0.043,0.088,0.06,0.186,0.047,0.283L12.941,32.161z M36.32,28.152l-0.947-0.32c0.407-1.204,0.618-2.464,0.627-3.745l1,0.007 C36.99,25.481,36.761,26.847,36.32,28.152z M11.232,26.435C11.078,25.635,11,24.815,11,24c0-0.563,0.037-1.128,0.108-1.679 L12.1,22.45C12.034,22.958,12,23.48,12,24c0,0.752,0.072,1.508,0.214,2.246L11.232,26.435z M35.864,22.187 c-0.192-1.26-0.583-2.476-1.162-3.613l0.891-0.454c0.628,1.233,1.052,2.551,1.26,3.917L35.864,22.187z M12.494,20.587l-0.959-0.285 c0.393-1.322,0.994-2.569,1.785-3.708l0.821,0.571C13.411,18.216,12.856,19.367,12.494,20.587z M33.706,16.95 c-0.752-1.032-1.658-1.934-2.692-2.681l0.586-0.811c1.119,0.809,2.1,1.786,2.914,2.903L33.706,16.95z M15.35,15.691l-0.722-0.692 c0.958-0.998,2.062-1.833,3.28-2.482l0.471,0.883C17.253,13.999,16.234,14.77,15.35,15.691z M29.385,13.277 c-1.14-0.575-2.357-0.961-3.619-1.148l0.146-0.989c1.368,0.203,2.688,0.622,3.922,1.245L29.385,13.277z M20.125,12.643L19.8,11.696 c1.304-0.446,2.668-0.68,4.055-0.695l0.011,1C22.586,12.015,21.327,12.231,20.125,12.643z"></path><g><path d="M24,14c5.523,0,10,4.477,10,10s-4.477,10-10,10c-1.901,0-3.671-0.54-5.185-1.461l-3.906,0.552l0.552-3.906 C14.54,27.671,14,25.901,14,24C14,18.477,18.477,14,24,14 M24,13c-6.065,0-11,4.935-11,11c0,1.884,0.491,3.739,1.422,5.39 l-0.503,3.561l-0.186,1.316l1.316-0.186l3.561-0.503C20.261,34.509,22.116,35,24,35c6.065,0,11-4.935,11-11S30.065,13,24,13L24,13 z" opacity=".05"></path><path d="M24,14c5.523,0,10,4.477,10,10s-4.477,10-10,10c-1.901,0-3.671-0.54-5.185-1.461l-3.906,0.552l0.552-3.906 C14.54,27.671,14,25.901,14,24C14,18.477,18.477,14,24,14 M24,13.5c-5.79,0-10.5,4.71-10.5,10.5c0,1.853,0.498,3.678,1.441,5.289 l-0.527,3.732l-0.093,0.658l0.658-0.093l3.732-0.527C20.322,34.002,22.147,34.5,24,34.5c5.79,0,10.5-4.71,10.5-10.5 S29.79,13.5,24,13.5L24,13.5z" opacity=".07"></path><path fill="#fff" d="M24,14c-5.523,0-10,4.477-10,10c0,1.901,0.54,3.671,1.461,5.185l-0.552,3.906l3.906-0.552 C20.329,33.46,22.099,34,24,34c5.523,0,10-4.477,10-10S29.523,14,24,14z"></path></g></svg>						</span>
										<span className="p-3 elementor-icon-list-text">SIGNAL  : linsap.06 </span>
											</a>
									</li>
								<li className="elementor-icon-list-item flex">
											<a className="flex" href="https://www.t2ll.com/smsRedirect.aspx/?phoneNumber=12244549118&#038;msg=Welcome%20to%20Serenity%20Haven%20Spa%20.What%20type%20of%20massage%20service%20do%20you%20intend%20to%20book%20an%20appointemnt%20for%20%3F">

												<span className="elementor-icon-list-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22 C6,38.866,9.134,42,13,42z"></path><path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153 c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205 c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726 c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332 c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0 c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922 C36.172,32.192,36.022,31.419,35.45,31.041z"></path></svg>						</span>
										<span className="p-3 elementor-icon-list-text">Phone : +1 (314) 323‑7087</span>
											</a>
									</li>
								<li className="elementor-icon-list-item flex">
											<span className="elementor-icon-list-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 29 3 C 28.0625 3 27.164063 3.382813 26.5 4 C 25.835938 4.617188 25.363281 5.433594 25 6.40625 C 24.355469 8.140625 24.085938 10.394531 24.03125 13.03125 C 19.234375 13.179688 14.820313 14.421875 11.28125 16.46875 C 10.214844 15.46875 8.855469 14.96875 7.5 14.96875 C 6.089844 14.96875 4.675781 15.511719 3.59375 16.59375 C 1.425781 18.761719 1.425781 22.238281 3.59375 24.40625 L 3.84375 24.65625 C 3.3125 26.035156 3 27.488281 3 29 C 3 33.527344 5.566406 37.585938 9.5625 40.4375 C 13.558594 43.289063 19.007813 45 25 45 C 30.992188 45 36.441406 43.289063 40.4375 40.4375 C 44.433594 37.585938 47 33.527344 47 29 C 47 27.488281 46.6875 26.035156 46.15625 24.65625 L 46.40625 24.40625 C 48.574219 22.238281 48.574219 18.761719 46.40625 16.59375 C 45.324219 15.511719 43.910156 14.96875 42.5 14.96875 C 41.144531 14.96875 39.785156 15.46875 38.71875 16.46875 C 35.195313 14.433594 30.800781 13.191406 26.03125 13.03125 C 26.09375 10.546875 26.363281 8.46875 26.875 7.09375 C 27.164063 6.316406 27.527344 5.757813 27.875 5.4375 C 28.222656 5.117188 28.539063 5 29 5 C 29.460938 5 29.683594 5.125 30.03125 5.40625 C 30.378906 5.6875 30.785156 6.148438 31.3125 6.6875 C 32.253906 7.652344 33.695313 8.714844 36.09375 8.9375 C 36.539063 11.238281 38.574219 13 41 13 C 43.75 13 46 10.75 46 8 C 46 5.25 43.75 3 41 3 C 38.605469 3 36.574219 4.710938 36.09375 6.96875 C 34.3125 6.796875 33.527344 6.109375 32.75 5.3125 C 32.300781 4.851563 31.886719 4.3125 31.3125 3.84375 C 30.738281 3.375 29.9375 3 29 3 Z M 41 5 C 42.667969 5 44 6.332031 44 8 C 44 9.667969 42.667969 11 41 11 C 39.332031 11 38 9.667969 38 8 C 38 6.332031 39.332031 5 41 5 Z M 25 15 C 30.609375 15 35.675781 16.613281 39.28125 19.1875 C 42.886719 21.761719 45 25.226563 45 29 C 45 32.773438 42.886719 36.238281 39.28125 38.8125 C 35.675781 41.386719 30.609375 43 25 43 C 19.390625 43 14.324219 41.386719 10.71875 38.8125 C 7.113281 36.238281 5 32.773438 5 29 C 5 25.226563 7.113281 21.761719 10.71875 19.1875 C 14.324219 16.613281 19.390625 15 25 15 Z M 7.5 16.9375 C 8.203125 16.9375 8.914063 17.148438 9.53125 17.59375 C 7.527344 19.03125 5.886719 20.769531 4.75 22.71875 C 3.582031 21.296875 3.660156 19.339844 5 18 C 5.714844 17.285156 6.609375 16.9375 7.5 16.9375 Z M 42.5 16.9375 C 43.390625 16.9375 44.285156 17.285156 45 18 C 46.339844 19.339844 46.417969 21.296875 45.25 22.71875 C 44.113281 20.769531 42.472656 19.03125 40.46875 17.59375 C 41.085938 17.148438 41.796875 16.9375 42.5 16.9375 Z M 17 22 C 14.800781 22 13 23.800781 13 26 C 13 28.199219 14.800781 30 17 30 C 19.199219 30 21 28.199219 21 26 C 21 23.800781 19.199219 22 17 22 Z M 33 22 C 30.800781 22 29 23.800781 29 26 C 29 28.199219 30.800781 30 33 30 C 35.199219 30 37 28.199219 37 26 C 37 23.800781 35.199219 22 33 22 Z M 17 24 C 18.117188 24 19 24.882813 19 26 C 19 27.117188 18.117188 28 17 28 C 15.882813 28 15 27.117188 15 26 C 15 24.882813 15.882813 24 17 24 Z M 33 24 C 34.117188 24 35 24.882813 35 26 C 35 27.117188 34.117188 28 33 28 C 31.882813 28 31 27.117188 31 26 C 31 24.882813 31.882813 24 33 24 Z M 34.15625 33.84375 C 34.101563 33.851563 34.050781 33.859375 34 33.875 C 33.683594 33.9375 33.417969 34.144531 33.28125 34.4375 C 33.28125 34.4375 32.757813 35.164063 31.4375 36 C 30.117188 36.835938 28.058594 37.6875 25 37.6875 C 21.941406 37.6875 19.882813 36.835938 18.5625 36 C 17.242188 35.164063 16.71875 34.4375 16.71875 34.4375 C 16.492188 34.082031 16.066406 33.90625 15.65625 34 C 15.332031 34.082031 15.070313 34.316406 14.957031 34.632813 C 14.84375 34.945313 14.894531 35.292969 15.09375 35.5625 C 15.09375 35.5625 15.863281 36.671875 17.46875 37.6875 C 19.074219 38.703125 21.558594 39.6875 25 39.6875 C 28.441406 39.6875 30.925781 38.703125 32.53125 37.6875 C 34.136719 36.671875 34.90625 35.5625 34.90625 35.5625 C 35.207031 35.273438 35.296875 34.824219 35.128906 34.441406 C 34.960938 34.058594 34.574219 33.820313 34.15625 33.84375 Z"></path></svg>						</span>
										<span className="p-3 elementor-icon-list-text">REDDIT: </span>
									</li>
								<li className="elementor-icon-list-item flex">
											<a className="flex" href="http://wa.link/tb3or0">

												<span className="elementor-icon-list-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" clip-rule="evenodd"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path></svg>						</span>
										<span className="p-3 elementor-icon-list-text">Whatsapp : +1 (314) 323‑7087</span>
											</a>
									</li>
						</ul>
						</div>
				</div>
				</div>
	
				</div>
					</div>
		
			
		

             
              </div>
              <div className="flex-col m-2 md:mx-1 md:w-1/4">
                  <img src={contact1} className="h-[93%]" alt="" />
              </div>
              <div className="flex-col m-2 md:mx-1 md:w-1/4">
                  <img src={contact2} className="h-[93%]" alt="" />
              </div>
              <div className="flex-col m-2 md:mx-1 md:w-1/4">
                  <img src={contact3} className="h-[93%]"  alt="" />
              </div>
            </div>

            <div className="flex justify-center items-center my-[5%]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#e0dfdf] md:mx-[30%] my-10 rounded-lg p-4"
      >
        <h1 className="text-center text-[30px] pb-4 font-semibold">
          Send A Message
        </h1>

        {successMessage && (
          <p className="text-green-600 text-center font-semibold mb-3">
            {successMessage}
          </p>
        )}

        <div>
          <label className="pb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border my-3 py-3 px-2"
            placeholder="Title"
          />
        </div>

        <div className="my-3">
          <label className="py-4">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-lg border my-3 py-3 px-2"
            placeholder="Enter Full Name"
          />
        </div>

        <div className="my-3">
          <label className="my-3">Enter Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border my-3 rounded-lg p-2"
            cols="30"
            rows="5"
            placeholder="Enter Message"
          ></textarea>
        </div>

        <button
          className="bg-blue-600 mb-2 w-full rounded-lg text-white p-3 hover:bg-blue-700 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
        </div>
    </section>
   </>
  );
};
export default About_Us;
