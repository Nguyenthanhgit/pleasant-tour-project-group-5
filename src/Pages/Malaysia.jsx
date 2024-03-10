import React from 'react'
import Menu from '../Components/Menu'

function Malaysia() {
    return (
        <div>
            <div>
                {/* Navbar & Hero Start */}
                <div className="container-fluid position-relative p-0">
                    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                        <div className="container py-5">
                            <div className="row justify-content-center py-5">
                                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                    <h1 className="display-3 text-white animated slideInDown">
                                        Malaysia
                                    </h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item">
                                                <a href="#">Home</a>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <a href="#">Destination</a>
                                            </li>
                                            <li
                                                className="breadcrumb-item text-white active"
                                                aria-current="page"
                                            >
                                                Malaysia
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navbar & Hero End */}

                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">
                        Destination
                    </h6>
                    <h1 className="mb-5">5 breathtakingly beautiful tourist destinations in Malaysia</h1>
                </div>
            </div>
            {/* Content*/}
            <div className='content container'>
                <p>Malaysia, with its unique geographical location, is divided into two separate landmasses that are approximately 400 miles apart by sea. This division creates a diverse natural landscape throughout the country. It boasts untouched and serene islands, romantic highlands, and captivating landscapes. Malaysia is not only known for its stunning natural beauty but also for its rich cultural diversity, encompassing various ethnicities, languages, and traditions. The country's culinary scene is also renowned for its diverse and exquisite flavors. It is no wonder that Malaysia has become a popular and enticing destination for travelers.</p>
                <h3 className='text'>1. Penang</h3>

                <p>Penang is one of the famous tourist destinations in Malaysia that attracts a large number of visitors. Known as the "Pearl of the Orient," this island is located in the northwest region of Malaysia. With a population of over 1.2 million people, Penang is ethnically diverse, including 60% Chinese, Malays, and Indians.</p>

                <p>Due to its ethnic diversity, Penang offers a rich and diverse traditional culture and cuisine. You can admire architectural structures influenced by various cultures and indulge in delicious street food.</p>
                <p>The city of Penang is a unique blend of historical and modern architecture, with ancient buildings steeped in history juxtaposed with modern skyscrapers of sophistication. This contrast creates a distinctive charm in Penang, and here are a few notable attractions:</p>

                <ul><li>Georgetown's Heritage Area</li>
                    <li>Kek Lok Si Temple</li>
                    <li>Penang Hill</li>
                    <li>Pinang Peranakan Mansion</li>
                </ul>

                <h3 className='text'>2. Petronas Twin Towers</h3>
                <p>It was once the tallest building in the world and is now the tallest twin building in the world. The twin towers consist of two 88-story buildings designed by Cesar Pelli & Associates. Both towers are connected at the 41st and 42nd floors by a two-story Sky Bridge that spans 58 meters. This is a popular check-in spot for tourists when visiting Malaysia.</p>
                <center><img src="img/malaysia1.jpg" alt="" /></center>

                <h3 className='text'>3. Batu Caves</h3>
                <p>Batu Caves is a famous cave in Malaysia and one of the popular tourist destinations in Kuala Lumpur. Located about 13 km north of the city center, Batu Caves is renowned for its Hindu temple situated inside the cave.</p>
                <p>This cave has a main entrance that is marked by a towering statue of Lord Murugan, a Hindu deity. Visitors must climb a flight of 272 steps to reach the cave entrance. Inside the cave, you will find a series of chambers with limestone formations and religious shrines.</p>
                <p>Batu Caves is not only a place of worship but also a significant cultural and historical site. It attracts both religious devotees and tourists who are interested in exploring the natural beauty and religious significance of the cave.</p>
                <center><img src="img/malaysia2.jpg" alt="" /></center>

                <h3 className='text'>4. Kuala Lumpur Convention Centre</h3>
                <p>Aquaria KLCC is the popular aquarium in Kuala Lumpur. Located in the Kuala Lumpur Convention Centre, it is a world-class oceanarium that showcases a diverse range of marine life. With over 5,000 exhibits and more than 150 different species, Aquaria KLCC offers a fascinating underwater experience.    </p>
                <p>Visitors can explore various zones, including the Living Ocean, featuring a walk-through tunnel where you can observe sharks, stingrays, and other marine creatures swimming overhead. The interactive Discovery Zone allows visitors to touch and interact with marine life, while the Rainforest section showcases the unique ecosystems of Malaysia's jungles.</p>
                <p>Aquaria KLCC provides an educational and entertaining experience for visitors of all ages. It is a must-visit attraction for those interested in marine life and wanting to discover the wonders of the underwater world without leaving the city.</p>
            <center><img src="img/malaysia3.jpg" alt="" /></center>

            <h3 className='text'>5. Langkawi Island</h3>
            <p>Langkawi is an archipelago consisting of 99 small islands located in the Andaman Sea, around 30 km from the mainland. It is known as a paradise for tourism in Malaysia, with numerous beautiful and impressive tourist attractions.</p>
            <center><img src="img/malaysia4.jpg" alt="" /></center>
            <p>In Langkawi, there are beautiful sandy beaches with smooth sand and clear blue waters, such as Pantai Tengah, Pantai Cenang, Pantai Kok, Tanjung Rhu, and Pantai Pasir Hitam. The special feature of Langkawi is its duty-free status. Visitors should take the opportunity to combine their visit with shopping, which can help save a considerable amount of money.</p>
            </div>
            {/* End Content*/}

        </div>
    )
}

export default Malaysia