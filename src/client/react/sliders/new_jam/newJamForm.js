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
						<RenderField
							key="Youtube Link"
							property={{
								displayName: "Youtube URL",
								propertyName: "url",
                                fieldType: "input",
                                propertyType: "string"
							}}
						/>
					</div>
				</Form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	if (!values.url) {
		errors.url = "Enter url ";
	}

	if (!youtubeUrlParser(values.url)) {
		errors.url = "Wrong youtube url";
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
