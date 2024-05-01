import styled from "styled-components";
import { Link } from "react-router-dom";

export const IconContainer = styled.div`
	width: 45px;
  height: 62px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    .content {
      display: block;
    }
  }
`;

export const NavigationContainer = styled.div`
	display: block;
  .skipLink {
    clip: rect(0,0,0,0);
    position: absolute;
  }
`;

export const Topbar = styled.div`
	background-color: #f8f8f8;
	color: #667;
	display: block;
	width: 100%;

	.misc-bar {
		box-sizing: border-box;
		height: 30px;
		margin: 0 auto;
		max-width: 1366px;
		padding: 0 32px;

		.misc-nav {
			float: right;
			height: 100%;
			list-style: none;
			margin: 0;
			padding: 0;

			li {
				border-left: 1px solid #ddd;
				display: block;
				float: left;
				height: 100%;

				&:last-of-type {
					border-right: 1px solid #ddd;
				}

				.country-selector {
					display: inline-block;
					height: auto;

					.country-selector-btn {
						background-color: initial;
						border: none;
						height: 30px;
						margin: 0;
						outline: none;
						padding: 0 17px;
						text-align: left;
					}
				}

				a {
					color: #667;
					display: block;
					line-height: 30px;
					padding: 0 19px;
					text-decoration: none;
				}
			}
		}
	}
`;

export const HeaderContainer = styled.div`
	height: 60px;

	.mainHeader {
		left: 0;
		right: 0;
		top: 0;
		z-index: 9501;
		position: relative;

    .headerWrapper {
      background-color: #2d2d2d;
      width: 100%;
      height: 60px;
    }

		.aHeader {
      box-sizing: border-box;
			max-width: 1366px;
			padding: 0 32px;
			width: 100%;
			color: #2d2d2d;
			display: flex;
			flex-flow: row;
      flex-wrap: nowrap;
			height: 100%;
			justify-content: space-between;
			margin: 0 auto;

			.left-body {
				display: flex;
				width: 100%;
			}
		}
	}
`;

export const LogoContainer = styled(Link)`
	margin-left: -20px;
	padding: 0 20px;
	align-items: center;
	display: flex;
	height: 60px;
	width: 40px;
  filter: invert(1);

  &:hover, 
  &:focus {
    opacity: 0.95;
  }
`;

export const NavLinks = styled.ul`
	display: inline-block;
	border-bottom: none;
	height: 100%;
	padding: 0;
	width: 230px;
`;

export const NavLink = styled(Link)`
	border-bottom: none;
	border-right: 1px solid #525050;
	box-sizing: border-box;
	width: 115px;
	display: inline-block;
	position: relative;
  color: #fff;
  height: 100%;
  line-height: 60px;

	&:first-of-type {
		border-left: 1px solid #525050;
	}
`;

export const SearchForm = styled.div`
	padding: 11px 15px 11px 30px;
	display: inline-block;
	flex-grow: 1;

	.search-overlay-shadow {
		transition: opacity 0.3s ease-in;
		background-color: rgba(45, 45, 45, 0.65);
		cursor: pointer;
		display: none;
		height: calc(100vh + 40px);
		left: 0;
		position: fixed;
		right: 0;
		top: -40px;
		z-index: 19000;
	}

	.search-form {
		background-color: initial;
		display: inline-block;
		height: 100%;
		overflow-y: initial;
		padding: 0;
		position: static;
		vertical-align: top;
		width: 100%;
		box-sizing: border-box;
	}

	.search-field {
		top: 0;
		background: #667;
		border-radius: 19px/50%;
		position: relative;

		.floating-label {
			display: none;
			backface-visibility: hidden;
			color: #667;
			font-size: 14px;
			font-weight: 700;
			left: 15px;
			opacity: 1;
			position: absolute;
			text-transform: uppercase;
			top: -25px;
			transition: opacity 0.3s linear;
			visibility: visible;
		}

		.search-input {
			-webkit-appearance: none;
			background: #fff;
			border: 0;
			border-radius: 19px/50%;
			box-sizing: border-box;
			color: #2d2d2d;
			font-size: 1rem;
			height: 38px;
			left: 0;
			padding-left: 16px;
			padding-right: 70px;
			position: absolute;
			top: 0;
			width: 100%;
		}

		.search-btn-inline {
			background-color: initial;
			border: 1px solid #0000;
			border-radius: 50%;
			box-sizing: border-box;
			color: #2d2d2d;
			height: 38px;
			padding: 10px;
			position: absolute;
			right: 0;
			top: 0;
			transition: background-color 0.3s;
			width: 38px;
			z-index: 22000;
		}

		.results {
			background-color: #eee;
			display: none;
			max-height: 50vh;
			padding: 32px 0 16px;
			top: 19px;
			.ghost {
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				margin: -1px;
				overflow: hidden;
				clip: rect(0, 0, 0, 0);
				border: 0;
			}
		}
	}
`;


