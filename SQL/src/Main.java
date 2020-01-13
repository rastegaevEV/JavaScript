import java.sql.*;

public class Main {
    public static void main(String[] args) {
        try{
            Class.forName("com.mysql.cj.jdbc.Driver").getDeclaredConstructor().newInstance();
            try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/store?serverTimezone=Europe/Moscow&useSSL=false", "root", "728894")){
                System.out.println("Connection to Store DB succesfull!");
                Statement statement = conn.createStatement();
                //statement.executeUpdate("CREATE TABLE goods (id INT PRIMARY KEY AUTO_INCREMENT, productName VARCHAR (255), price INT)");
                statement.executeUpdate("INSERT goods (productName, price) VALUES ('qwe', 234), ('rty', 567)");
            }
        }
        catch(Exception ex){
            System.out.println("Connection failed...");

            System.out.println(ex);
        }
        /*Connection conn = null;
        try {
            String userName = "root";
            String password = "728894";
            String url = "jdbc:mysql://localhost/store?serverTimezone=Europe/Moscow&useSSL=false";
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(url, userName, password);
            System.out.println("Database connection established");

        } finally {
            System.out.println("Database connection terminated");
        }*/
    }

}
