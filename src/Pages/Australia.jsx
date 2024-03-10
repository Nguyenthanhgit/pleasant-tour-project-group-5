import React from 'react';
import Menu from '../Components/Menu';

function Australia() {
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
                    Australia
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Destination</a>
                      </li>
                      <li
                        className="breadcrumb-item text-white active"
                        aria-current="page"
                      >
                        Australia
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
          <h1 className="mb-5">5 tourist attractions in Australia</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div className="content">
          <p>
            "Australia is known as one of the largest territories in the world
            and a famous paradise for vacations. Therefore, this land is always
            a dream destination for many travelers. So, where should you go for
            tourism in Australia? If you are planning to visit Australia in the
            near future, let's explore some famous tourist attractions in
            Australia through the article below, together with EuroTravel!
          </p>
          <h3 className="text">1. Kakadu National Park</h3>
          <ul>
            <li>Address: Kakadu Hwy, Jabiru NT 0886, Australia</li>
            <li>Opening Hours: Open all day</li>
            <li>Ticket Price: $40/adult, $20/child</li>
            <li>Advantages: Stunning landscapes, diverse terrain</li>
            <li>
              Disadvantages: Park may not be accessible for visitors during the
              rainy season.
            </li>
          </ul>
          <p>
            Kakadu National Park is a tourist destination in Australia located
            in the northern region, boasting vast and breathtaking natural
            landscapes. Stretching across a rich land with abundant vegetation,
            it is sure to leave visitors in awe
          </p>
          <p>
            With an area of nearly 20,000 square kilometers, Kakadu is a "shared
            home" for many wild animal species such as crocodiles, wild
            elephants, dingoes, and 275 native bird species of Australia.
            Particularly, Kakadu National Park is still home to indigenous
            tribes, and their lives are closely tied to this land.
          </p>
          <center>
            <img src="img/australia1.jpg" alt="" />
          </center>{' '}
          <br /> <br />
          <h3 className="text">2. The Great Barrier Reef</h3>
          <p>
            Where should you go for tourism in Australia? Stretching over 3000km
            off the coast of Queensland, the Great Barrier Reef is home to over
            3000 coral reefs, 1500 species of fish, and is surrounded by over
            600 islands, big and small. Beneath the clear blue waters, the
            landscape resembles a magnificent kaleidoscope, adorned with
            thousands of sparkling coral reefs.
          </p>
          <p>
            Cảnh sắc tuyệt diệu này đã đưa Great Barrier trở thành một trong 7
            kỳ quan mới của thế giới. Chèo thuyền kayak và lặn biển ngắm san hô
            là hai hoạt động thú vị Du Khách nên thử khi tham quan tại đây.
          </p>
          <center>
            <img src="img/australia2.jpg" alt="" />
          </center>{' '}
          <br /> <br />
          <h3 className="text">3. Sydney City</h3>
          <p>
            Visiting Sydney, travelers will experience the modern lifestyle and
            grandeur of a 'city that never sleeps,' as well as admire top
            tourist attractions in Australia such as the iconic Sydney Opera
            House, Sydney Harbour Bridge, Bondi Beach, and The Rocks - the
            historic district nestled in the heart of Sydney.
          </p>
          <center>
            <img src="img/australia3.jpg" alt="" />
          </center>{' '}
          <br /> <br />
          <h3 className="text">4. Uluru (Ayers Rock) </h3>
          <p>
            Uluru, also known as Ayers Rock, is a massive red rock formation
            that stands majestically in the Kata Tjuta National Park and is
            renowned as a unique symbol of the indigenous people.
          </p>
          <p>
            Today, Uluru is managed by the Anangu people, an indigenous tribe
            who have inhabited this land for thousands of years. For them, Uluru
            is a sacred and significant symbol in their culture and
            spirituality.
          </p>
          <p>
            Travelers can visit Uluru to explore the indigenous culture and
            participate in activities such as long-distance walks, sunset
            viewing, and hiking around the park area.
          </p>
          <center>
            <img src="img/australia4.jpg" alt="" />
          </center>{' '}
          <br /> <br />
          <h3 className="text">5. Melbourne City</h3>
          <p>
            The city of Melbourne is located in the state of Victoria and is the
            second-largest city in Australia, following Sydney. The city is
            renowned as the cultural capital of the country and has been honored
            as one of the most livable places in the world.
          </p>
          <p>
            Melbourne embraces a serene and distinctive beauty characterized by
            classical architecture blended with a touch of modernity. Some
            iconic landmarks that can be mentioned include St. Patrick's
            Cathedral, Federation Square, the Eureka Tower, and the Queen
            Victoria Market - the oldest market in the city.
          </p>
          <center>
            <img src="img/australia5.jpg" alt="" />
          </center>{' '}
          <br /> <br />
        </div>
      </div>
      {/* End Content */}
    </div>
  );
}

export default Australia;
