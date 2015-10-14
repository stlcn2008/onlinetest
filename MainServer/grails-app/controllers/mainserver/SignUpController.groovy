package mainserver

import grails.converters.JSON
import grails.rest.RestfulController
import grails.util.Environment
import org.springframework.http.HttpStatus

class SignUpController extends BaseController<SignUp>{

    SignUpController() {
        super(SignUp)
    }

    JSON createConvertor(def Object instances) {
        return null
    }

    @Override
    def index() {
        if(params.activecode){
            User user = User.findByActivecode(params.activecode)
            user.setActivated(true)
            user.save()

            render "You have successfully activated you account"
        } else {
            super.index()
        }
    }

    @Override
    def save() {
        SignUp signUp = createResource()

        User admin = User.newInstance()
        admin.setEmail(signUp.getEmail())
        admin.setPassword(signUp.getPassword())
        admin.setPhone(signUp.getPhone())

        Organization org = Organization.newInstance()
        org.setName(signUp.getOrganization())

        def existingOrg = Organization.findByName(org.getName())
        if (existingOrg) {
            def message = "The organization named ${org.name} already existed! ".toString() //Please ask the admin to invite you in
            render message, status:HttpStatus.CONFLICT
            return
        }
        org.save()
        admin.setOrganization(org)
        String uuid = UUID.randomUUID().toString()
        admin.setActivecode(uuid)
        admin.save()
        sendActiveEmail(admin)
        render admin as JSON
    }

    private def sendActiveEmail(User admin) {

        def htmlContent = Environment.currentEnvironment == Environment.PRODUCTION ? "<a href=\"http://123.57.255.128:8080/MainServer/signup?activecode=${admin.activecode}\">click the link to active your account</a>" :
                "<a href=\"http://localhost:8080/MainServer/signup?activecode=${admin.activecode}\">click the link to active your account</a>"
        sendMail {
            to admin.getEmail()
            subject "User Sign up"
            html htmlContent
        }
    }

}
