package mainserver

import grails.converters.JSON

class UserController extends BaseController<User> {

    UserController() {
        super(User)
    }

    JSON createConvertor(def instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(Organization.class, ['class','users'])
        convertor
    }

    @Override
    def save() {
        def instance = createResource()
        instance.save()

        def org =  createOrganization()
        org.validate()
        if(org.hasErrors()){
            render org.errors
        }

        def convertor = createConvertor(instance)
        render convertor
    }

    private createOrganization() {
        Organization org = Organization.newInstance()
        bindData org, getObjectToBind()
        org
    }

}