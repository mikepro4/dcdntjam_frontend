import React, { PropTypes } from "react";
import classnames from "classnames";

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
		"input-group": true,
		"input-large": large,
		"input-valid": touched && !error,
		"input-invalid": touched && error
	});

	let inputClassName = classnames({
		"input": true,
		"intent-success": touched && !error,
		"intent-danger": touched && error
	});

	return (
		<div className={containerClassName}>
			{label ? (
				<div className="input-group-left">
					<div className="input-label">{label}</div>
				</div>
			) : (
				""
			)}

			<div className="input-group-right">
				{icon ? <span className={`pt-icon pt-icon-${icon}`} /> : ""}

				<input
					{...input}
					className={inputClassName}
					placeholder={placeholder}
					type={type}
				/>

				{touched && error ? (
					<div className="input-error">
						{touched && error && <span>{error}</span>}
					</div>
				) : (
					""
				)}

				{touched && !error ? (
					<div className="input-valid">
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
