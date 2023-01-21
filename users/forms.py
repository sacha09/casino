from allauth.account.forms import SignupForm
from django import forms

class MyCustomSignupForm(SignupForm):

    accept_conditions = forms.BooleanField()

    def save(self, request):

        # Ensure you call the parent class's save.
        # .save() returns a User object.
        user = super(MyCustomSignupForm, self).save(request)

        # Add your own processing here.

        user.accept_conditions = self.cleaned_data['accept_conditions']

        # if user.accept_conditions is False then you can raise a validation error
        # raise forms.ValidationError("You must accept the conditions")
        if user.accept_conditions is False:
            raise forms.ValidationError("You must accept the conditions")

        user.save()

        # You must return the original result.
        return user