package mainserver

import grails.converters.JSON
import org.springframework.http.HttpStatus

class SignInController extends BaseController<SignIn>{

    SignInController() {
        super(SignIn)
    }

    JSON createConvertor(def instances) {
        def convertor = new JSON(instances)
        convertor.setExcludes(User.class, ['class','email', 'admin']) //TODO add more fields
        convertor
    }

    @Override
    def index() {

        if (params.login ){
            def user = User.findByEmailOrPhone(params.login, params.login)
            if (!user || user.password != params.password) {
                render status: HttpStatus.NOT_FOUND
                return
            }
            render createConvertor(user)
        }
    }
}
