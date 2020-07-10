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
					<div className="edit-avatar-section">
							<div className="edit-profile-avatar">
                                <img src={this.props.user.profile.photos[0].value}/>
                            </div>

							<div className="button-update-photo">Update photo from Youtube</div>
					</div>
					
					<div className="main-properties">
						<RenderField
							key="displayName"
							property={{
								displayName: "Full Name",
								propertyName: "displayName",
                                fieldType: "input",
                                propertyType: "string"
							}}
						/>
						<RenderField
							key="username"
							property={{
								displayName: "Username",
								propertyName: "username",
                                fieldType: "input",
                                propertyType: "string"
							}}
						/>
						<RenderField
							key="website"
							property={{
								displayName: "Website",
								propertyName: "website",
                                fieldType: "input",
                                propertyType: "string"
							}}
						/>

						<RenderField
							key="bio"
							property={{
								displayName: "Bio",
								propertyName: "bio",
                                fieldType: "textarea"
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
	user: state.app.user
});

export default connect(mapStateToProps, {
	fetchCurrentUser
})(UserEditorForm);
