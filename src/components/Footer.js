import React, { Component } from 'react'

export class Footer extends Component {
              // eslint-disable-next-line

  render() {
              // eslint-disable-next-line

    return (
      <div>
        <footer className="bg-dark text-center text-light text-lg-start">
          {/* <!-- Grid container --> */}
          <div className="container p-4">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">EatYourOreo ©</h5>

                <p>
                    It is a news fetching website / app uses external api from <b>news.api</b><br />
                    highly fragile website not for high scaling of users.
                </p>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Issues - Queries</h5>

                <p>
                    If any issue reports into the website please report it through
                    our git / Linkedin info 
                    please find below: <br />
                    <a href="https://github.com/aerisakaaritra" target='_blank'>github</a><br />
                    {/* <b>github: https://github.com/aerisakaaritra</b> */}
                    {/* <b>Linkedin: https://www.linkedin.com/in/aritra-dhoni-270250232/</b> */}
                    
                    <a href="https://www.linkedin.com/in/aritra-dhoni-270250232/" target='_blank'>LinkedIn</a>
                </p>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          
          <div
            className="text-center p-3"
            htmlstyle="background-color: rgba(0, 0, 0, 0.2);"
          >
            © 2023 Copyright: 
            <a className="text-light" href="https://www.instagram.com/aritra_dhoni/" target='_blank'>
              AeriaOpra & co.
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
    )
  }
}

export default Footer

