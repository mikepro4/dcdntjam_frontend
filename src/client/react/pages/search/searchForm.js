import React, { PropTypes } from "react";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import classnames from "classnames";
import { Form } from "redux-form";
import { connect } from "react-redux";
import { Button, Intent } from "@blueprintjs/core";

import RenderField from "../../components/common/form/RenderField";
import { youtubeUrlParser } from "../../../utils/youtube";

class MainSearchForm extends React.Component {

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
						<div className="full-input-container main_search">
							<RenderField
								key="Youtube Link"
								property={{
									displayName: "Search..",
									propertyName: "search",
									fieldType: "input",
									propertyType: "main_search",
									description: "Search..."
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

	// if (!values.url) {
	// 	errors.url = "Please enter URL ";
	// }

	// if (!youtubeUrlParser(values.url)) {
	// 	errors.url = "Wrong URL format";
	// }

	return errors;
};

MainSearchForm = reduxForm({
	form: "mainSearchForm",
	validate
})(MainSearchForm);

const mapStateToProps = state => ({
	user: state.app.user
});

export default connect(mapStateToProps, {
})(MainSearchForm);
