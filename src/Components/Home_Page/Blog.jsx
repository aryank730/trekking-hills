import React, { useState, useEffect } from 'react';
import chopta from '../../images/chopta.jpg';
import nagtibba from '../../images/nagtibba.jpg';
import kedarnath from '../../images/kedarnath.jpg';
import Chopta_Blog from '../../images/chopta_blog.jpg';
import nagtibba_blog from '../../images/nagtibba_blog.jpg';
import kedarnath_blog from '../../images/kedarnath_blog.jpg';
import './Home.css'

const Blog = () => {
    const [popupVisible, setPopupVisible] = useState(null);

    // Function to open specific popup
    const openPopup = (popupNumber) => {
        setPopupVisible(popupNumber);
    };

    // Function to close the popup
    const closePopup = () => {
        setPopupVisible(null);
    };

    // Function to close the popup if the outer background is clicked
    const handleOuterClick = (e) => {
        if (e.target.classList.contains('popup')) {
            closePopup();
        }
    };

    // Prevent scrolling of the body when the popup is open
    useEffect(() => {
        if (popupVisible !== null) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when the popup is closed
        }
    }, [popupVisible]);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {/* First Blog Post */}
                <div onClick={() => openPopup(1)} className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                        <img className="w-full" src={nagtibba} alt="Sunset in the mountains" />
                        <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                            <div className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                            Arrive in Kathmandu, where you’ll meet your guide and prepare...
                            </div>
                            <p className="text-gray-500 text-sm">
                            Today’s trek takes you to Namche Bazaar, the bustling capital of the Khumbu region.
                            </p>
                            <p className=" flexmt-5 text-gray-600 text-xs">
                                By <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">Author</span> | in{" "}
                                <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">Mount Everest</span>,{" "}
                                <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">India</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Blog Post */}
                <div onClick={() => openPopup(2)} className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                        <div>
                            <img className="w-full" src={chopta} alt="Sunset in the mountains" />
                        </div>
                        <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                            <div className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                            The Mount Everest Trek takes you to the base of the highest...
                            </div>
                            <p className="text-gray-500 text-sm">
                            Hike to Everest Base Camp, standing at the foot of the tallest mountain in the world.
                            </p>
                            <p className=" flexmt-5 text-gray-600 text-xs">
                                By <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">author</span> | in{" "}
                                <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">Mount Everest </span>,{" "}
                                <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">India</span>
                            </p>
                        </div>
                    </div>
                </div>

               
                

                {/* Third Blog Post */}
                 <div onClick={() => openPopup(3)} className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                        <div>
                            <img className="w-full" src={kedarnath} alt="Sunset in the mountains" />
                        </div>
                        <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                            <div className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                            The Kailash Parvat Trek is a sacred journey for many pilgrims and trekk...
                            </div>
                            <p className="text-gray-500 text-sm">
                            Embark on a challenging trek through the Tibetan Plateau, surrounded by breathtaking...
                            </p>
                            <p className=" flexmt-5 text-gray-600 text-xs">
                                By <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">Author</span> | in{" "}
                                <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">Kailash Parvat</span>,{" "}
                                <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">India</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup 1 */}
            {popupVisible === 1 && (
                <div className="popup" onClick={handleOuterClick}>
                    <div className="popup-content slide-up">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <div className="max-w-3xl mx-auto">
                            {/* Blog post header */}
                            <div className="py-8">
                                <h1 className="text-3xl font-bold mb-2">K2 Everest Trek</h1>
                                <p className="text-gray-500 text-sm">
                                    Published on <time dateTime="2025-03-21">March 21, 2025</time>
                                </p>
                            </div>
                            <p className=' font-light text-xl py-5 text-left ' >
                                The K2 Everest Trek is a challenging adventure, taking you through breathtaking landscapes and high altitudes. It’s one of the most sought-after treks for seasoned hikers and mountaineers.
                            </p>
                            {/* Featured image */}
                            <img
                                src={Chopta_Blog} // Keep the same image for now
                                alt="Featured image"
                                className="w-full h-auto mb-8"
                            />

                            <div className="mt-8 text-left">
                                <h2 className="text-2xl font-semibold text-gray-600 mb-4">K2 Everest Trek Highlights</h2>
                                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                                    <li>Hike to the base of the world’s second-highest peak, K2, and take in magnificent panoramic views.</li>
                                    <li>Experience the majestic beauty of the Karakoram Range, passing glaciers, rivers, and unique mountain villages.</li>
                                    <li>Reach altitudes of over 5,000 meters and feel the thrill of standing at the foot of one of the most iconic peaks on Earth.</li>
                                </ul>
                            </div>

                            {/* Trek Details */}
                            <div className="glass-efe p-4 mt-8 text-lg text-gray-800">
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Trek Details</h2>
                                <p><strong>Difficulty:</strong> Hard</p>
                                <p><strong>Starting Point:</strong> Kathmandu, Nepal</p>
                                <p><strong>Duration:</strong> 14 Days</p>
                                <p><strong>Charges:</strong> USD 3500/Person (Kathmandu to Kathmandu)</p>
                                <p><strong>Transport Type:</strong> Group sharing (flights, buses, and jeeps)</p>
                            </div>

                            {/* Trek Itinerary */}
                            <div className="mt-8 text-lg text-left text-gray-800">
                                <h2 className="text-2xl font-semibold text-gray-600 mb-4">Trek Itinerary</h2>
                                <div className="space-y-4">
                                    <h3 className="font-semibold">Day-1: Kathmandu to Lukla</h3>
                                    <p><strong>Flight duration:</strong> 35 minutes | <strong>Altitude:</strong> 2,860 meters</p>
                                    <p>Fly from Kathmandu to Lukla, where you will begin your journey with a short trek to Phakding.</p>

                                    <h3 className="font-semibold">Day-2: Lukla to Namche Bazaar</h3>
                                    <p><strong>Trek distance:</strong> 10 km | <strong>Duration:</strong> 6-7 hours</p>
                                    <p>Today’s trek leads you to Namche Bazaar, the largest town in the Khumbu region, where you can acclimatize and prepare for the higher altitudes.</p>

                                    <h3 className="font-semibold">Day-3 to Day-7: Namche Bazaar to Everest Base Camp</h3>
                                    <p>You'll trek through several villages, passing beautiful landscapes and towering peaks, making your way to Everest Base Camp. Along the way, you’ll acclimatize and explore the majestic surroundings.</p>

                                    <h3 className="font-semibold">Day-8: Everest Base Camp to Kala Patthar</h3>
                                    <p><strong>Trek distance:</strong> 6 km | <strong>Duration:</strong> 5-6 hours</p>
                                    <p>Start early to hike to Kala Patthar for a spectacular sunrise view of Everest. Return to Base Camp and rest before heading back.</p>

                                    <h3 className="font-semibold">Day-9 to Day-14: Return Journey to Lukla</h3>
                                    <p>Retrace your steps back to Lukla and board a flight back to Kathmandu, concluding your incredible journey to the base of K2 Everest.</p>
                                </div>
                            </div>

                            {/* Trek Package Inclusions */}
                            <div className="glass-efe p-4 mt-8 text-lg text-gray-800">
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">K2 Everest Trek Package Inclusions</h2>
                                <ul className="list-none text-left pl-6 space-y-3">
                                    <li><strong>Stay:</strong> Tea houses, lodges, and camping in select locations</li>
                                    <li><strong>Meals:</strong> Breakfast, Lunch, Dinner, and Snacks along the way</li>
                                    <li><strong>Washroom:</strong> Basic toilet facilities (in tea houses or campgrounds)</li>
                                    <li><strong>Transportation:</strong> Flights (Kathmandu to Lukla) and ground transportation</li>
                                    <li><strong>Activities:</strong> Trekking, Camping, Sightseeing</li>
                                    <li><strong>Guide:</strong> Professional trek guide and porter services</li>
                                </ul>
                            </div>

                            {/* Trek Quick Facts */}
                            <div className="mt-8 text-left text-lg text-gray-800">
                                <h2 className="text-2xl font-semibold text-gray-600 mb-4">K2 Everest Trek Quick Facts</h2>
                                <p><strong>Temperature:</strong> Day (10°C to 20°C) | Night (-15°C to -5°C) at Everest Base Camp</p>
                                <p><strong>Altitude:</strong> Everest Base Camp: 5,364 meters, Kala Patthar: 5,545 meters</p>
                                <p><strong>Trek Distance:</strong> 130 km (Kathmandu to Everest Base Camp and return)</p>
                                <p><strong>Best Time to Trek:</strong> March to May and September to November</p>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* Popup 2 */}
            {popupVisible === 2 && (
                <div className="popup" onClick={handleOuterClick}>
                    <div className="popup-content slide-up">
                        <span className="close" onClick={closePopup}>&times;</span>

                        <div className="max-w-3xl mx-auto">
                            {/* Blog post header */}
                            <div className="py-8">
                                <h1 className="text-3xl font-bold mb-2">Mount Everest Trek</h1>
                                <p className="text-gray-500 text-sm">
                                    Published on <time dateTime="2025-03-21">March 21, 2025</time>
                                </p>
                            </div>
                            <p className=' font-light text-xl py-5 text-left ' >
                                The Mount Everest Trek takes you to the base of the highest peak in the world. This trek is not only about the challenge of high-altitude trekking but also about experiencing the rich Sherpa culture, stunning Himalayan landscapes, and the beauty of the world's tallest mountain.
                            </p>
                            {/* Featured image */}
                            <img
                                src={nagtibba_blog} // Keep the same image for now
                                alt="Featured image"
                                className="w-full h-auto mb-8"
                            />

                            <div className="mt-8 text-left">
                                <h2 className="text-2xl font-semibold text-gray-600 mb-4">Mount Everest Trek Highlights</h2>
                                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                                    <li>Hike to Everest Base Camp, standing at the foot of the tallest mountain in the world.</li>
                                    <li>Experience the unique Sherpa culture and visit beautiful villages like Namche Bazaar and Tengboche.</li>
                                    <li>Enjoy stunning views of Everest, Lhotse, Nuptse, and other Himalayan giants along the way.</li>
                                </ul>
                            </div>

                            {/* Trek Details */}
                            <div className="glass-efe p-4 mt-8 text-lg text-gray-800">
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Trek Details</h2>
                                <p><strong>Difficulty:</strong> Moderate to Challenging</p>
                                <p><strong>Starting Point:</strong> Kathmandu, Nepal</p>
                                <p><strong>Duration:</strong> 14 Days</p>
                                <p><strong>Charges:</strong> USD 2200/Person (Kathmandu to Kathmandu)</p>
                                <p><strong>Transport Type:</strong> Group sharing (flights, buses, and jeeps)</p>
                            </div>

                            {/* Trek Itinerary */}
                            <div className="mt-8 text-lg text-left text-gray-800">
                                <h2 className="text-2xl font-semibold text-gray-600 mb-4">Trek Itinerary</h2>
                                <div className="space-y-4">
                                    <h3 className="font-semibold">Day-1: Arrival in Kathmandu</h3>
                                    <p><strong>Flight duration:</strong> Varies | <strong>Altitude:</strong> 1,400 meters</p>
                                    <p>Arrive in Kathmandu, where you’ll meet your guide and prepare for the trek. Spend the day resting and exploring the city.</p>

                                    <h3 className="font-semibold">Day-2: Kathmandu to Lukla</h3>
                                    <p><strong>Flight duration:</strong> 35 minutes | <strong>Altitude:</strong> 2,860 meters</p>
                                    <p>Fly to Lukla, the gateway to the Everest region. After arrival, begin your trek to Phakding, where you’ll spend the night.</p>

                                    <h3 className="font-semibold">Day-3: Lukla to Namche Bazaar</h3>
                                    <p><strong>Trek distance:</strong> 10 km | <strong>Duration:</strong> 6-7 hours</p>
                                    <p>Today’s trek takes you to Namche Bazaar, the bustling capital of the Khumbu region. Enjoy the views of Everest and surrounding peaks as you acclimatize.</p>

                                    <h3 className="font-semibold">Day-4: Namche Bazaar to Tengboche</h3>
                                    <p><strong>Trek distance:</strong> 10 km | <strong>Duration:</strong> 5-6 hours</p>
                                    <p>Continue your journey to Tengboche, home to the famous Tengboche Monastery. Enjoy breathtaking views of Everest, Lhotse, and Ama Dablam.</p>

                                    <h3 className="font-semibold">Day-5: Tengboche to Dingboche</h3>
                                    <p><strong>Trek distance:</strong> 10 km | <strong>Duration:</strong> 6-7 hours</p>
                                    <p>The trail leads you to Dingboche, a beautiful village located at a higher altitude. Rest and acclimatize as you continue to gain altitude.</p>

                                    <h3 className="font-semibold">Day-6: Dingboche to Lobuche</h3>
                                    <p><strong>Trek distance:</strong> 8 km | <strong>Duration:</strong> 5-6 hours</p>
                                    <p>As you ascend further, the views of Everest and surrounding peaks become even more majestic. Reach Lobuche and rest for the night.</p>

                                    <h3 className="font-semibold">Day-7: Lobuche to Everest Base Camp</h3>
                                    <p><strong>Trek distance:</strong> 15 km | <strong>Duration:</strong> 7-8 hours</p>
                                    <p>The highlight of the trek! Today, you’ll trek to Everest Base Camp, standing at the foot of the world’s highest peak. Take in the stunning views and reflect on the accomplishment.</p>

                                    <h3 className="font-semibold">Day-8: Everest Base Camp to Kala Patthar</h3>
                                    <p><strong>Trek distance:</strong> 6 km | <strong>Duration:</strong> 5-6 hours</p>
                                    <p>Wake up early to trek to Kala Patthar for a breathtaking sunrise view of Mount Everest and the surrounding peaks. Afterward, descend back to Gorak Shep.</p>

                                    <h3 className="font-semibold">Day-9 to Day-14: Return Journey to Kathmandu</h3>
                                    <p>Begin the journey back to Lukla, retracing your steps across the Khumbu region. After arriving in Lukla, take a flight back to Kathmandu and conclude your trek.</p>
                                </div>
                            </div>

                            {/* Trek Package Inclusions */}
                            <div className="glass-efe p-4 mt-8 text-lg text-gray-800">
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Mount Everest Trek Package Inclusions</h2>
                                <ul className="list-none text-left pl-6 space-y-3">
                                    <li><strong>Stay:</strong> Tea houses and lodges along the trek</li>
                                    <li><strong>Meals:</strong> Breakfast, Lunch, Dinner, and Snacks during the trek</li>
                                    <li><strong>Washroom:</strong> Basic toilet facilities in tea houses or campgrounds</li>
                                    <li><strong>Transportation:</strong> Flights (Kathmandu to Lukla) and ground transportation</li>
                                    <li><strong>Activities:</strong> Trekking, Sightseeing, Cultural experiences</li>
                                    <li><strong>Guide:</strong> Professional trekking guide and porter services</li>
                                </ul>
                            </div>

                            {/* Trek Quick Facts */}
                            <div className="mt-8 text-left text-lg text-gray-800">
                                <h2 className="text-2xl font-semibold text-gray-600 mb-4">Mount Everest Trek Quick Facts</h2>
                                <p><strong>Temperature:</strong> Day (5°C to 15°C) | Night (-15°C to -5°C) at high altitudes</p>
                                <p><strong>Altitude:</strong> Everest Base Camp: 5,364 meters, Kala Patthar: 5,545 meters</p>
                                <p><strong>Trek Distance:</strong> Approximately 130 km (Kathmandu to Everest Base Camp and return)</p>
                                <p><strong>Best Time to Trek:</strong> March to May and September to November</p>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* Popup 3 */}
            {popupVisible === 3 && (
                <div className="popup" onClick={handleOuterClick}>
                    <div className="popup-content slide-up">
                        <span className="close" onClick={closePopup}>&times;</span>
                        
                        <div className="max-w-3xl mx-auto">
                            {/* Blog post header */}
                            <div className="py-8">
                                <h1 className="text-3xl font-bold mb-2">Kailash Parvat Trek</h1>
                                <p className="text-gray-500 text-sm">
                                    Published on <time dateTime="2025-03-21">March 21, 2025</time>
                                </p>
                            </div>
                            <p className=' font-light text-xl py-5 text-left ' >
                                The Kailash Parvat Trek is a sacred journey for many pilgrims and trekkers, taking you to one of the most revered mountains in the world. This spiritual adventure is surrounded by legends, natural beauty, and unique Tibetan culture.
                            </p>
                            {/* Featured image */}
                            <img
                                src={kedarnath_blog} // Keep the same image for now
                                alt="Featured image"
                                className="w-full h-auto mb-8"
                            />

                            <div className="mt-8 text-left">
                                <h2 className="text-2xl font-semibold text-gray-600 mb-4">Kailash Parvat Trek Highlights</h2>
                                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
                                    <li>Visit the holiest mountain in the world, Mount Kailash, a place of immense spiritual significance.</li>
                                    <li>Embark on a challenging trek through the Tibetan Plateau, surrounded by breathtaking views of snow-capped peaks.</li>
                                    <li>Complete the challenging parikrama (circumambulation) of Mount Kailash and experience the spiritual energy of the region.</li>
                                </ul>
                            </div>

                            {/* Trek Details */}
                            <div className="glass-efe p-4 mt-8 text-lg text-gray-800">
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Trek Details</h2>
                                <p><strong>Difficulty:</strong> Moderate to Challenging</p>
                                <p><strong>Starting Point:</strong> Lhasa, Tibet</p>
                                <p><strong>Duration:</strong> 13 Days</p>
                                <p><strong>Charges:</strong> USD 3000/Person (Lhasa to Lhasa)</p>
                                <p><strong>Transport Type:</strong> Group sharing (flights, buses, and jeeps)</p>
                            </div>

                            {/* Trek Itinerary */}
                            <div className="mt-8 text-lg text-left text-gray-800">
                                <h2 className="text-2xl font-semibold text-gray-600 mb-4">Trek Itinerary</h2>
                                <div className="space-y-4">
                                    <h3 className="font-semibold">Day-1: Arrival in Lhasa</h3>
                                    <p><strong>Flight duration:</strong> Varies | <strong>Altitude:</strong> 3,650 meters</p>
                                    <p>Arrive in Lhasa, the capital of Tibet. Take the day to rest and acclimatize to the high altitude.</p>

                                    <h3 className="font-semibold">Day-2: Lhasa Sightseeing</h3>
                                    <p>Visit key attractions in Lhasa, such as the Potala Palace, Jokhang Temple, and Barkhor Street. Rest and prepare for the journey ahead.</p>

                                    <h3 className="font-semibold">Day-3 to Day-6: Lhasa to Darchen</h3>
                                    <p>Travel to Darchen, the starting point of the Kailash Parvat trek. Enjoy the scenic drive through the Tibetan plateau and surrounding villages.</p>

                                    <h3 className="font-semibold">Day-7: Trek to Dirapuk</h3>
                                    <p><strong>Trek distance:</strong> 12 km | <strong>Duration:</strong> 6-7 hours</p>
                                    <p>The trek begins from Darchen towards Dirapuk. Along the way, experience the rugged terrain and stunning views of Mount Kailash from a distance.</p>

                                    <h3 className="font-semibold">Day-8: Trek to Zuthulphuk</h3>
                                    <p><strong>Trek distance:</strong> 22 km | <strong>Duration:</strong> 8-9 hours</p>
                                    <p>On this day, you will trek across challenging terrain, including crossing the Dolma La Pass (5,630 meters). The view from the top of the pass is breathtaking, with a close-up view of Mount Kailash.</p>

                                    <h3 className="font-semibold">Day-9: Trek to Darchen and drive to Lake Manasarovar</h3>
                                    <p>Complete the parikrama of Kailash and trek back to Darchen. Afterward, drive to the sacred Lake Manasarovar, where you can relax and reflect on your journey.</p>

                                    <h3 className="font-semibold">Day-10 to Day-13: Return Journey to Lhasa</h3>
                                    <p>Begin your journey back to Lhasa, retracing your steps across the Tibetan Plateau with scenic views and peaceful surroundings. Arrive in Lhasa for some rest before your departure.</p>

                                    <h3 className="font-semibold">Day-14: Departure from Lhasa</h3>
                                    <p>Fly back to your destination, concluding your spiritual and adventurous journey to Kailash Parvat.</p>
                                </div>
                            </div>

                            {/* Trek Package Inclusions */}
                            <div className="glass-efe p-4 mt-8 text-lg text-gray-800">
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Kailash Parvat Trek Package Inclusions</h2>
                                <ul className="list-none text-left pl-6 space-y-3">
                                    <li><strong>Stay:</strong> Guesthouses, monasteries, and tents along the trek</li>
                                    <li><strong>Meals:</strong> Breakfast, Lunch, Dinner, and Snacks during the trek</li>
                                    <li><strong>Washroom:</strong> Basic toilet facilities (in guesthouses or campgrounds)</li>
                                    <li><strong>Transportation:</strong> Flights (Lhasa to Tibet), private vehicles for transfers</li>
                                    <li><strong>Activities:</strong> Trekking, Cultural Sightseeing, Spiritual ceremonies</li>
                                    <li><strong>Guide:</strong> Professional guide and porter services for the trek</li>
                                </ul>
                            </div>

                            {/* Trek Quick Facts */}
                            <div className="mt-8 text-left text-lg text-gray-800">
                                <h2 className="text-2xl font-semibold text-gray-600 mb-4">Kailash Parvat Trek Quick Facts</h2>
                                <p><strong>Temperature:</strong> Day (5°C to 15°C) | Night (-5°C to 5°C) at high altitudes</p>
                                <p><strong>Altitude:</strong> Kailash Parvat Trek maximum altitude: 5,630 meters (Dolma La Pass)</p>
                                <p><strong>Trek Distance:</strong> Approximately 52 km (Kailash Parvat circuit)</p>
                                <p><strong>Best Time to Trek:</strong> May to September (before the winter snowfall)</p>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Blog;
