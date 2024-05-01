import { ReactComponent as IgLogo } from "../../assets/instagram.svg";
import { ReactComponent as FbLogo } from "../../assets/facebook.svg";
import { ReactComponent as ScLogo } from "../../assets/snapchat.svg";

import {
	InternationalSites,
	FooterContainer,
	LinkGroupContainer,
	IconBar,
	HelpLinksGroup,
	HelpLinksContainer,
	CountrySelector,
	LocationContainer,
	Button,
  LegalBar,
} from "./footer.styles";

const Footer = () => {
	return (
		<div className="footer">
			<FooterContainer>
				<LinkGroupContainer>

          <IconBar>

            <ul className="social-links">

              <li className="">

                <a
                  className=""
                  href="https://www.facebook.com/ASOS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <FbLogo />
                  
                </a>

              </li>

              <li className="">

                <a
                  className=""
                  href="https://www.instagram.com/asos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <IgLogo/>
                  
                </a>

              </li>

              <li className="">

                <a
                  className=""
                  href="https://www.snapchat.com/add/asosfashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <ScLogo/>
                  
                </a>

              </li>

            </ul>

            <ul className="payment-types">

              <li className="payment-type">
                <img
                  src="https://images.asos-media.com/navigation/visa-png"
                  alt="VISA"
                />
              </li>
              <li className="payment-type">
                <img
                  src="https://images.asos-media.com/navigation/mastercard-png"
                  alt="Mastercard"
                />
              </li>
              <li className="payment-type">
                <img
                  src="https://images.asos-media.com/navigation/pay-pal-png"
                  alt="PayPal"
                />
              </li>
              <li className="payment-type">
                <img
                  src="https://images.asos-media.com/navigation/american-express-png"
                  alt="American Express"
                />
              </li>
              <li className="payment-type">
                <img
                  src="https://images.asos-media.com/navigation/visa-electron-png"
                  alt="VISA Electron"
                />
              </li>
              <li className="payment-type">
                <img
                  src="https://images.asos-media.com/navigation/maestro-png"
                  alt="Maestro"
                />
              </li>
              <li className="payment-type">
                <img
                  src="https://images.asos-media.com/navigation/apple-pay-png"
                  alt="Apple Pay"
                />
              </li>
            </ul>
            
          </IconBar>

          <HelpLinksContainer>
            <HelpLinksGroup>

              <section className="help-links">
                <h3 className="header">Help &amp; Information</h3>
                <ul>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/customer-care/"
                    >
                      Help
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://my.asos.com/my-account/orders?country=GB&amp;keyStoreDataversion=q1av6t0-39&amp;lang=en-GB&amp;store=COM"
                    >
                      Track order
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/payments-and-deliveries/delivery/"
                    >
                      Delivery &amp; returns
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/customer-service/premier-delivery/"
                    >
                      Resale Fortuune Premier
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/discover/students/asos-on-campus/student-validation"
                    >
                      10% Student Discount
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/sitemap/"
                    >
                      Sitemap
                    </a>
                  </li>
                </ul>
              </section>

              <section className="help-links">
                <h3 className="header">About Resale Fortuune</h3>
                <ul>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/about/"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://asoscareers.asos.com/"
                      target="_blank"
                    >
                      Careers at Resale Fortuune
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asosplc.com/fashion-with-integrity/"
                      target="_blank"
                    >
                      Corporate responsibility
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asosplc.com/"
                      target="_blank"
                    >
                      Investors' site
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/discover/cyber-security/"
                    >
                      Cyber Security
                    </a>
                  </li>
                </ul>
              </section>

              <section className="help-links">
                <h3 className="header">More From Resale Fortuune</h3>
                <ul>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/discover/our-apps/"
                    >
                      Mobile and RF apps
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://marketplace.asos.com/?ctaref=Global+footer"
                      target="_blank"
                    >
                      RF Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/gift-vouchers/?ctaref=global%20footer|gift%20vouchers"
                    >
                      Gift vouchers
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/discover/black-friday-cyber-monday-deals/"
                    >
                      Black Friday
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://thrift.plus/pages/get-started-asos"
                      target="_blank"
                    >
                      RF x Thrift+
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/discover/refer-a-friend/?situation=web_footer"
                    >
                      Refer A Friend
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/discover/partner-fulfils/"
                    >
                      Info for Partners
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://www.asos.com/discover/asos-credit-card"
                    >
                      Discover the RF Credit Card
                    </a>
                  </li>
                  <li>
                    <a
                      className="help-link"
                      href="https://asos.uservoice.com/forums/923293"
                      target="_blank"
                    >
                      Help Improve the RF Website
                    </a>
                  </li>
                </ul>
              </section>

              <LocationContainer>

                <h3 className="country-location" hidden>
                  Shopping from:
                </h3>

                <CountrySelector>
                  <Button>
                    <span className="location-text">You're in</span>
                    <img
                      src="https://assets.asosservices.com/storesa/images/flags/gb.png"
                      alt="United Kingdom"
                      className="countryFlag"
                    />
                    <div className="change-label">
                      <span className="" aria-hidden="true"></span>
                      <span><h3>Change</h3></span>
                    </div>
                  </Button>
                </CountrySelector>

                <InternationalSites>
                  <p id="chrome-sites">Some of our international sites:</p>
                  <ul aria-labelledby="chrome-sites">
                    <li>
                      <a href="//www.asos.com/es/">
                        <img
                          className="countryFlag"
                          src="https://assets.asosservices.com/storesa/images/flags/es.png"
                          alt="Spain"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="//www.asos.com/de/">
                        <img
                          src="https://assets.asosservices.com/storesa/images/flags/de.png"
                          alt="Germany"
                          className="countryFlag"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="//www.asos.com/au/">
                        <img
                          src="https://assets.asosservices.com/storesa/images/flags/au.png"
                          alt="Australia"
                          className="countryFlag"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="//www.asos.com/fr/">
                        <img
                          src="https://assets.asosservices.com/storesa/images/flags/fr.png"
                          alt="France"
                          className="countryFlag"
                          />
                          </a>
                          </li>
                          <li>
                          <a href="//www.asos.com/us/">
                          <img
                          src="https://assets.asosservices.com/storesa/images/flags/us.png"
                          alt="United States"
                          className="countryFlag"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="//www.asos.com/dk/">
                        <img
                          src="https://assets.asosservices.com/storesa/images/flags/dk.png"
                          alt="Denmark"
                          className="countryFlag"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="//www.asos.com/it/">
                        <img
                          src="https://assets.asosservices.com/storesa/images/flags/it.png"
                          alt="Italy"
                          className="countryFlag"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="//www.asos.com/nl/">
                        <img
                          src="https://assets.asosservices.com/storesa/images/flags/nl.png"
                          alt="Netherlands"
                          className="countryFlag"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="//www.asos.com/pl/">
                        <img
                          src="https://assets.asosservices.com/storesa/images/flags/pl.png"
                          alt="Poland"
                          className="countryFlag"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="//www.asos.com/se/">
                        <img
                          src="https://assets.asosservices.com/storesa/images/flags/se.png"
                          alt="Sweden"
                          className="countryFlag"
                        />
                      </a>
                    </li>
                  </ul>
                </InternationalSites>

              </LocationContainer>

            </HelpLinksGroup>
          </HelpLinksContainer>

				</LinkGroupContainer>

				<LegalBar>

					<div className="legalBar">
            <p className="copyright">© 2024 RESALE FORTUUNE</p>
            <ul className="legalLinks">
              <li>
                <a href="https://www.asos.com/privacy-policy/">Privacy &amp; Cookies</a>
                <span className="seperator" aria-hidden="true"></span>
              </li>
              <li>
                <a href="https://www.asos.com/terms-and-conditions/">Ts&amp;Cs</a>
                <span className="seperator" aria-hidden="true"></span>
              </li>
              <li className="hideOnSmallViewport">
                <a href="https://www.asos.com/accessibility/">Accessibility</a>
              </li>
            </ul>
            
          </div>

				</LegalBar>

			</FooterContainer>
		</div>
	);
};

export default Footer;
