import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import AccountIcon from "../../components/myaccount-icon/myaccount-icon.component";
import AccountDropdown from "../../components/account-dropdown/account-dropdown.component";

import { ReactComponent as LikesIcon } from "../../assets/hL.svg";
import { ReactComponent as RfLogo } from "../../assets/rf.svg";

import {
	NavigationContainer,
	LogoContainer,
	Topbar,
	HeaderContainer,
	SearchForm,
	IconContainer,
} from "./navigation.styles";

const Navigation = () => {
	const { isCartOpen } = useContext(CartContext);

	const { isDropdownOpen } = useContext(UserContext);

	return (
		<Fragment>

			<NavigationContainer>
				<a href="" className="skipLink" data-testid="skip-to-content">
					Skip to main content
				</a>

				<Topbar>
					<div className="misc-bar">
						<ul className="misc-nav">
							<li>
								<a
									href="https://marketplace.asos.com/?ctaref=Global+nav"
									data-testid="marketplace"
								>
									Marketplace
								</a>
							</li>
							<li>
								<a
									href="https://www.asos.com/customer-care/"
									data-testid="help"
								>
									Help &amp; FAQs
								</a>
							</li>
							<li>
								<div className="country-selector">
									<button
										className="country-selector-btn"
										type="button"
										aria-label="You're in United Kingdom Change"
									>
										<img
											className="countryFlag"
											src="https://assets.asosservices.com/storesa/images/flags/gb.png"
											alt="United Kingdom"
										/>
									</button>
								</div>
							</li>
						</ul>
					</div>
				</Topbar>

				<HeaderContainer>
					<div className="mainHeader">
						<div className="headerWrapper">
							<div className="aHeader">

								<div className="left-body">

									<LogoContainer to="/">
										<RfLogo className="logo" />
									</LogoContainer>
								
									<ul className="navContainer bodyText">
										<li>
											<a href="/shop" className="button ">
												SHOP
											</a>
										</li>
										<li>
											<a className="button" >
												ESSENTIALS
											</a>
										</li>
									</ul>
								
									<SearchForm>
										<div
											className="search-overlay-shadow"
											aria-hidden="true"
											role="presentation"
										></div>
										<form
											action="//www.asos.com/search/"
											className="search-form"
											method="get"
										>
											<div className="search-field">
												<span
													className="floating-label"
													aria-hidden="true"
												></span>
												<label
													id="search-label"
													for="input-search"
													hidden="true"
												>
													Search for items and brands
												</label>
												<input
													type="search"
													id="input-search"
													name="q"
													className="search-input bodyText"
													autocomplete="off"
													autocorrect="off"
													spellcheck="off"
													placeholder="Search for items and brands"
													data-testid="search-input"
													aria-autocomplete="list"
													aria-haspopup="listbox"
													aria-expanded="false"
													maxlength="150"
													value=""
												/>
												<button
													className="search-btn-inline"
													type="submit"
													disabled=""
													data-testid="search-button-inline"
												>
													<svg
														viewBox="0 0 17 17"
														role="img"
														aria-labelledby="search-icon"
													>
														<title id="search-icon">Search</title>
														<path
															fill="currentColor"
															fill-rule="nonzero"
															d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z"
														></path>
													</svg>
												</button>
												<div className="results">
													<div className="ghost" aria-live="polite"></div>
												</div>
											</div>
										</form>
									</SearchForm>

								</div>

								<ul className="widgets">
									<AccountIcon />

									<IconContainer>
										<LikesIcon />
									</IconContainer>

									<CartIcon />
								</ul>

							</div>
						</div>
					</div>
				</HeaderContainer>

				<section className="extended-nav largeNavigation" data-gender="men">

					<div>
						<nav className="kontainer">
							<div className="navigation">
								<div className=" navButtons">

									<div className="_aa">
										<button className=" navButton bodyText">
											<span className=" navButton__label">
												<span className="">New in</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>

									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Clothing</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-2 column">

														<h2 className="columnHeader">
															<span>Shop by Products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>Top Rated Clothing</a>
															</li>

															<li>
																<a>Exclusives at Resale Fortuune</a>
															</li>

															<li>
																<a>Bestsellers</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop By Body Fit</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Shop by Edit</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>

									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Trending</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>
									
									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Dresses</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>

									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Shoes</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>

									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Assesories</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>

									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Face + Body</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>
									
									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Brands</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>
									
									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Sportswear</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>
									
									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Topshop</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>
									
									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Marketplace</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>
									
									<div className="_aa">
										<button className="navButton bodyText">
											<span className="navButton__label">
												<span>Sale</span>
											</span>
										</button>
										<div className="secondaryNav">

											<div className="backdrop"></div>
											<div className="flyoutContainer">
												<div className="flyout">

													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>New products</span>
														</h2>

														<ul className="textList">

															<li>
																<a>View all</a>
															</li>

															<li>
																<a>Clothing</a>
															</li>

															<li>
																<a>Shoes</a>
															</li>

															<li>
																<a>New in: Today</a>
															</li>

															<li>
																<a>New in: Selling Fast</a>
															</li>
														
														</ul>
													</div>
													
													<div className="colspan-1 column">

														<h2 className="columnHeader">
															<span>Shop spring</span>
														</h2>

														<ul className="textList circleImageLink">

															<li className="circleImageLink">
																<a href="">

																	<div className="circleImageBorder">
																		<div className="circleImage _a"></div>
																	</div>

																	<div className="labelContainer" >
																		<span className="label link bodyText">Spring Outfits</span>
																	</div>
																
																</a>
															</li>

															<li>
																<a>Brunch Outfits</a>
															</li>
															
															<li>
																<a>Sundresses</a>
															</li>
															
															<li>
																<a>Occasional Wear</a>
															</li>
															
															<li>
																<a>Linen</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>Your Most Hyped</span>
														</h2>
														<ul className="textList">
															<li>
																<a>View all</a>
															</li>
															<li>
																<a>Tops</a>
															</li>
															<li>
																<a>Dresses</a>
															</li>
															<li>
																<a>Knits and Sweats</a>
															</li>
															<li>
																<a>Skirts</a>
															</li>
														
														</ul>
													</div>

													<div className="colspan-1 column">
														<h2 className="columnHeader">
															<span>New edits</span>
														</h2>
														<ul className="textList">
															<li>
																<a>Mediterranan Summer</a>
															</li>
															<li>
																<a>Swim and Beach</a>
															</li>
														
														</ul>
													</div>

												</div>
											</div>

										</div>
									
									</div>
									
								</div>
							</div>
						</nav>
					</div>

				</section>

				<section className="src-GlobalBanner-GlobalBanner_globalBanner">
				
					<div className="src-GlobalBanner-GlobalBanner_loaded">
						<div className="src-GlobalBanner-Column-Column_column" >
							<div className="src-GlobalBanner-Unit-Unit_unit src-GlobalBanner-Unit-Unit_unitCenter" >

								<a href="/shop/womens" className="src-GlobalBanner-Button-Button_button">WOMEN</a>
								<button className="src-GlobalBanner-Content-Content_content src-GlobalBanner-Content-Content_contentCenter">
									<span className="src-GlobalBanner-Content-Content_copy ">
										<strong>
											PSST! NEW HERE? Get 10% off almost everything!*
											<br />
											With code: HIFRIEND
										</strong>
									</span>
								</button>
								<div className="src-GlobalBanner-Tooltip-Tooltip_wrapperCenter ">
									<div className="src-GlobalBanner-Tooltip-Tooltip_tooltip">
										*Enter code HIFRIEND at checkout to receive discount on first
										order with a value of over £20. Ends 8am BST on 28 August 2024.
										Codes can be used on first orders only and up to a maximum
										pre-discount spend of £500. Valid for New customers orders to
										the United Kingdom only. Can’t be used with other promo codes or
										on gift vouchers, delivery charges, Premier Delivery or ASOS
										Marketplace. Selected marked products excluded from promo.
									</div>
								</div>
								<a href="/shop/mens" className="src-GlobalBanner-Button-Button_button">MEN</a>

							</div>
						</div>
					</div>

				</section>

				{isDropdownOpen && <AccountDropdown />}

				{isCartOpen && <CartDropdown />}

			</NavigationContainer>
			<Outlet />

		</Fragment>
	);
};

export default Navigation;
