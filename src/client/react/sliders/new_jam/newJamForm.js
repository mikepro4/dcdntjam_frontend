import React, { PropTypes } from "react";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import classnames from "classnames";
import { Form } from "redux-form";
import { connect } from "react-redux";
import { Button, Intent } from "@blueprintjs/core";

import RenderField from "../../components/common/form/RenderField";
import { youtubeUrlParser } from "../../../utils/youtube";

class NewJamForm extends React.Component {

	render() {

		const { handleSubmit } = this.props;

		return (
			<div>
				<Form
					onSubmit={handleSubmit}
					autoComplete="off"
					role="presentation"
					className=""
				>
					
					<div className="main-properties">
						<div className="full-input-container youtube_url">
							<RenderField
								key="Youtube Link"
								property={{
									displayName: "Youtube video URL:",
									propertyName: "url",
									fieldType: "input",
									propertyType: "string",
									description: "Paste Youtube URL here..."
								}}
							/>
						</div>
					</div>
				</Form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	if (!values.url) {
		errors.url = "Please enter URL ";
	}

	if (!youtubeUrlParser(values.url)) {
		errors.url = "Wrong URL format";
	}

	return errors;
};

NewJamForm = reduxForm({
	form: "newJamForm",
	validate
})(NewJamForm);

const mapStateToProps = state => ({
	user: state.app.user
});

export default connect(mapStateToProps, {
})(NewJamForm);
