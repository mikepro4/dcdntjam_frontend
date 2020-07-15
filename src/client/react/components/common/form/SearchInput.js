import React, { PropTypes } from "react";
import classnames from "classnames";
import { fromPairs } from "lodash";
import SmallSearch from "../../icons/small_search"
import SmallCross from "../../icons/small_cross"

const Input = ({
	input,
	label,
	placeholder,
	icon,
	large,
	type,
	meta: { touched, error }
}) => {
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

				<SmallSearch/>

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

				{touched ? (
					<div className="search-input-clear">
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
	);
};

export default Input;
