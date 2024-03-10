import React from 'react';
import Menu from '../Components/Menu';

function Thailand() {
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
                    Thailand
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
                        Thailand
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
          <h1 className="mb-5">
            Travel guide to Thailand - Must-visit destinations
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h3 className="text">1. Bangkok</h3>
          <p>
            The beautiful capital city of Bangkok is the first place that comes
            to mind for any tourist visiting Thailand.
          </p>
          <h3 className="text">2. Pattaya</h3>
          <b>Koh Larn Coral Island</b> <br />
          <p>
            {' '}
            Koh Larn offers a pristine atmosphere, clear blue skies, and
            untouched coral reefs. Here, you can enjoy various water activities
            such as jet-skiing, windsurfing, parasailing, or explore the
            underwater world through diving. You can also indulge in affordable
            and delicious seafood.{' '}
          </p>
          <b>Nong Nooch Cultural Village</b> <br />
          <p>
            Located 25 km from Pattaya, Nong Nooch Cultural Village is like a
            "paradise on earth" with its pristine and stunning natural scenery.
            Visitors have the opportunity to witness unique cultural
            performances such as elephant shows, traditional martial arts
            demonstrations, and traditional Thai dances.
          </p>
          <h3 className="text">3. Chiang Mai</h3>
          <b>Doi Suthep</b> <br />
          <p>
            This is a famous and sacred temple in Chiang Mai, attracting many
            Buddhist pilgrims. With a history of over 600 years, Doi Suthep is
            renowned for its majestic Buddha statues and ancient charm.
          </p>
          <b>Chiang Mai Rainforest </b>
          <br />
          <p>
            Chiang Mai Rainforest is one of the largest and most unique virgin
            forests in Thailand. Visitors can experience elephant rides, explore
            the pristine forest, and appreciate the natural beauty while
            enjoying the warm hospitality of the local people.
          </p>
          <b>Golden Triangle</b> <br />
          <p>
            This area used to be a major opium-producing region, but now it has
            been transformed into an ecological tourism destination. It offers
            vibrant commercial activities, entertainment, and caters to the
            needs of tourists for leisure, entertainment, and shopping.
          </p>
          {/* img */}
          <div className="container">
            <div className="img-thailand">
              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="img/thailan1.jpg" class="d-block w-100" alt="" />
                  </div>
                  <div class="carousel-item">
                    <img src="img/thailan2.jpg" class="d-block w-100" alt="" />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/thailan3.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          {/* End img */}
          <h3 className="text">4. Phuket</h3>
          <b>Phang Nga Bay</b>
          <br />
          <p>
            Phang Nga Bay features dozens of towering limestone cliffs emerging
            from the sea, along with unique caves thatcan be explored by kayak
            or boat. The famous James Bond Island, known for its appearance in
            the movie "The Man with the Golden Gun," is located in this bay.
          </p>
          <b>Patong Beach</b>
          <br />
          <p>
            Patong Beach is one of the most popular and lively beaches in
            Phuket. It offers a vibrant nightlife scene, a wide range of water
            activities, and plenty of beachfront bars and restaurants.
          </p>
          <b>Phi Phi Islands</b> <br />
          <p>
            The Phi Phi Islands are a group of stunning islands known for their
            crystal-clear waters, white sandy beaches, and vibrant marine life.
            Maya Bay, where the movie "The Beach" was filmed, is a must-visit
            spot in this archipelago.
          </p>
          <h3 className="text"> 5. Krabi</h3>
          <b>Railay Beach</b>
          <br />
          Railay Beach is a paradise for rock climbers and beach lovers. It is
          surrounded by limestone cliffs and offers beautiful beaches, clear
          waters, and a relaxed atmosphere. The beach is accessible only by
          boat, adding to its secluded charm.
          <br />
          <b>Phi Phi Islands</b>
          <br />
          <p>
            The Phi Phi Islands also belong to the Krabi Province and can be
            visited as a day trip from Krabi. These islands are famous for their
            stunning natural beauty, snorkeling and diving opportunities, and
            vibrant nightlife.
          </p>
          <b> Ao Nang</b>
          <br />
          <p>
            {' '}
            Ao Nang is a popular beach resort town situated in Krabi. It serves
            as a gateway to various nearby attractions and offers a wide range
            of accommodation options, restaurants, and shops. It's a great base
            for exploring the surrounding islands and natural wonders.
          </p>
          <p>
            These are just a few highlights of what Thailand has to offer. The
            country is rich in cultural heritage, beautiful landscapes, and warm
            hospitality, making it a favorite destination for travelers from
            around the world. Remember to check the current travel restrictions
            and guidelines before planning your trip, as they may vary.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Thailand;
