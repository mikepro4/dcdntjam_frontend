import React, { PropTypes } from "react";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import classnames from "classnames";
import { Form } from "redux-form";
import { connect } from "react-redux";
import { Button, Intent } from "@blueprintjs/core";

import { fetchCurrentUser } from "../../../redux/actions/appActions";

import RenderField from "../../components/common/form/RenderField";

class UserEditorForm extends React.Component {
	renderProperty = property => {
		if (property) {
			return (
				<div key={property._id} className="single-form-row">
					{<RenderField property={property} />}
				</div>
			);
		} else return {};
	};

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
					<div className="generic-properties">
						<h1 className="form-headline">User settings:</h1>
						<RenderField
							key="canContainEntities"
							property={{
								displayName: "Username",
								propertyName: "username",
                                fieldType: "input",
                                propertyType: "string"
							}}
						/>
					</div>

					<div className="form-footer">
						<Button
							intent={Intent.SUCCESS}
							disabled={this.props.pristine}
							type="submit"
							text="Update User"
						/>
					</div>
				</Form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	if (!values.username) {
		errors.username = "Username is required";
	}

	return errors;
};

UserEditorForm = reduxForm({
	form: "editUserForm",
	validate
})(UserEditorForm);

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {
	fetchCurrentUser
})(UserEditorForm);
