package mainserver

/**
 * Created by tony on 2015/10/12.
 */
class Organization {

    static hasMany = [users: User]

    String name

    static constraints = {
        name blank: false, unique: true
    }
}
