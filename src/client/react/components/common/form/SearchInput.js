import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { fromPairs } from "lodash";
import SmallSearch from "../../icons/small_search"
import SmallCross from "../../icons/small_cross"

import { resetForm } from "../../../../redux/actions/appActions";
import { searchTermUpdate } from "../../../../redux/actions/pageSearchActions";

class SearchInput extends Component {
	render() {
		const {
			input,
			label,
			placeholder,
			icon,
			large,
			type,
			meta: { touched, error }
		} = this.props;

		let containerClassName = classnames({
			"search-input-group": true,
			"search-input-large": large,
			"search-input-valid": touched && !error,
			"search-input-invalid": touched && error
		});
	
		let inputClassName = classnames({
			"search-input": true,
			"search-intent-success": touched && !error,
			"search-intent-danger": touched && error
		});
		return (
			<div className={containerClassName}>
				{label ? (
					<div className="search-input-group-left">
						<div className="search-input-label">{label}</div>
					</div>
				) : (
					""
				)}
	
				<div className="search-input-group-right">
					
					<div className="search-icon-container">
						<SmallSearch/>
					</div>
	
					<input
						{...input}
						className={inputClassName}
						placeholder={placeholder}
						type={type}
					/>
	
					{touched && (
						<div className="search-input-error">
							{touched && error && <span>{error}</span>}
						</div>
					)}
	
					{input.value ? (
						<div 
							className="search-input-clear"
							onClick={() => {
								this.props.searchTermUpdate(null)
								this.props.resetForm("mainSearchForm")
							}}
						>
							<SmallCross />
						</div>
					) : (
						""
					)}
	
					{touched && !error ? (
						<div className="search-input-valid">
							<span className="pt-icon pt-icon-small-tick" />
						</div>
					) : (
						""
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({});

export default withRouter(
	connect(mapStateToProps, { 
		resetForm,
		searchTermUpdate
	 })(SearchInput)
);


// const Input = ({
// 	input,
// 	label,
// 	placeholder,
// 	icon,
// 	large,
// 	type,
// 	meta: { touched, error }
// }) => {
	// let containerClassName = classnames({
	// 	"search-input-group": true,
	// 	"search-input-large": large,
	// 	"search-input-valid": touched && !error,
	// 	"search-input-invalid": touched && error
	// });

	// let inputClassName = classnames({
	// 	"search-input": true,
	// 	"search-intent-success": touched && !error,
	// 	"search-intent-danger": touched && error
	// });

	// return (
	// 	<div className={containerClassName}>
	// 		{label ? (
	// 			<div className="search-input-group-left">
	// 				<div className="search-input-label">{label}</div>
	// 			</div>
	// 		) : (
	// 			""
	// 		)}

	// 		<div className="search-input-group-right">
				
	// 			<div className="search-icon-container">
	// 				<SmallSearch/>
	// 			</div>

	// 			<input
	// 				{...input}
	// 				className={inputClassName}
	// 				placeholder={placeholder}
	// 				type={type}
	// 			/>

	// 			{touched && (
	// 				<div className="search-input-error">
	// 					{touched && error && <span>{error}</span>}
	// 				</div>
	// 			)}

	// 			{touched ? (
	// 				<div className="search-input-clear">
	// 					<SmallCross />
	// 				</div>
	// 			) : (
	// 				""
	// 			)}

	// 			{touched && !error ? (
	// 				<div className="search-input-valid">
	// 					<span className="pt-icon pt-icon-small-tick" />
	// 				</div>
	// 			) : (
	// 				""
	// 			)}
	// 		</div>
	// 	</div>
// 	);
// };

// export default Input;
