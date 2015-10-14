package mainserver

class User {

    static belongsTo = [organization: Organization]

    String email

    String phone

    String password

    boolean admin

    boolean activated

    String activecode

    static constraints = {

    }

    static mapping = {
        admin defaultValue: false
        activated defaultValue: false
    }
}
