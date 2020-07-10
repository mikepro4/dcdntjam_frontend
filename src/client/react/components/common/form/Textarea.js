import React, { PropTypes } from "react";
import classnames from "classnames";

const Textarea = ({
	input,
	label,
	placeholder,
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
			<div className="input-group-left">
				{label ? <div className="input-label textarea-label">{label}</div> : ""}
			</div>

			<div className="input-group-right">
				<textarea
					{...input}
					className={inputClassName}
					placeholder={placeholder}
					rows="3"
					type={type}
				/>

				{touched && error ? (
					<div className="input-error">
						{touched && error && <span>{error}</span>}
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Textarea;
