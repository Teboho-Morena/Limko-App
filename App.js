import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <ScrollView>
        <Image style={styles.logo} source={require("./assets/logo.jpg")} />
        <View style={styles.WelcomeMessage}>
          <Text>WELCOME TO LIMKOKWING UNIVERSITY OF</Text>
          <Text>CREATIVE TECHNOLOGY</Text>
        </View>
        <View style={styles.FounderQuote}>
          <Text>
            "We have an urgent mission. We need to review, revamp and reinvent
            the development and delivery of education so that every young person
            that wants an education is able to get one."
          </Text>
        </View>
        <View style={styles.founder}>
          <Text>Tan Sri Dato' Sri Paduka Dr Limkokwing</Text>
        </View>
        <View style={styles.intro}>
          <Text>
            Looking for your ideal course? Here's a list of courses to choose
            from...
          </Text>
        </View>
        <View>
          <Image
            style={styles.BusinessThumbnail}
            source={{
              uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9uBhJJEiusVDlFEatDJizAHaFj%26pid%3DApi&f=1",
            }}
          />
        </View>
        <View>
          <Text style={styles.FirstCourse}>
            Associate Degree in Business Management
          </Text>
        </View>
        <View>
          <Text style={styles.FirstCourseDetails}>
            This course trains students in business administration & management.
            This course will provide students with an understanding of the basic
            theories and principles by which businesses are organized and
            managed in modern society.
          </Text>
        </View>
        <View>
          <Image
            style={styles.TourismThumbnail}
            source={{
              uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.GRdzs9v6UGC7PkuAyZ7nVwAAAA%26pid%3DApi&f=1",
            }}
          />
        </View>
        <View>
          <Text style={styles.SecondCourse}>
            Bachelor Of Arts (Hons) In Tourism Management
          </Text>
        </View>
        <View>
          <Text style={styles.SecondCourseDetails}>
            Tourism Management is a very broad definition and there are
            different branches involved.In general, students of this field have
            a journey all around the world by exploring diverse cultures,
            customs and behaviors while at the same time implementing business
            ideas into a particular field. Since the program is pretty broad, it
            is divided into four separate specializations:
          </Text>
          <Text> 1.Development of Hotels, resorts and parks.</Text>
          <Text> 2.Guiding of gastronomy to advance restaurants.</Text>
          <Text> 3.Stimulation of visits to destinations and events.</Text>
          <Text> 4.Promotion of wellbeing and healthy lifestyles.</Text>
        </View>
        <View>
          <Image
            style={styles.SWEThumbnail}
            source={{
              uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Xpp0OaTmi6JBXMPRiVuDVgHaEK%26pid%3DApi&f=1",
            }}
          />
        </View>
        <View>
          <Text style={styles.ThirdCourse}>
            Bachelor of Science (Hons) in Software Engineering with Multimedia
          </Text>
        </View>
        <View>
          <Text style={styles.ThirdCourseDetails}>
            This course is aimed at helping students build up an understanding
            of how to develop a software system from scratch by guiding them
            through the development process and giving them the fundamental
            principles of system development with object oriented technology
            using UML. The course will initiate students to the different
            software process models, project management, software requirements
            engineering process, systems analysis and design as a
            problem-solving activity, key elements of analysis and design, and
            the place of the analysis and design phases within the system
            development life cycle.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 100,
    marginLeft: "20%",
  },
  WelcomeMessage: {
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    marginTop: 5,
  },
  FounderQuote: {
    marginTop: 5,
    fontWeight: "bold",
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  founder: {
    marginTop: 10,
    alignItems: "center",
  },
  intro: {
    marginTop: 10,
    marginLeft: 5,
  },
  BusinessThumbnail: {
    marginTop: 5,
    width: 45,
    height: 45,
    marginLeft: 5,
  },
  FirstCourse: {
    fontSize: 20,
    marginLeft: 53,
    marginTop: -47,
    textDecorationLine: "underline",
  },
  FirstCourseDetails: {
    fontStyle: "italic",
    marginLeft: 5,
  },
  TourismThumbnail: {
    marginTop: 5,
    width: 45,
    height: 45,
    marginLeft: 5,
  },
  SecondCourse: {
    fontSize: 20,
    marginLeft: 53,
    marginTop: -47,
    textDecorationLine: "underline",
  },
  SecondCourseDetails: {
    fontStyle: "italic",
    marginLeft: 5,
  },
  SWEThumbnail: {
    marginTop: 5,
    width: 45,
    height: 45,
    marginLeft: 5,
  },
  ThirdCourse: {
    fontSize: 20,
    marginLeft: 53,
    marginTop: -47,
    textDecorationLine: "underline",
  },
  ThirdCourseDetails: {
    fontStyle: "italic",
    marginLeft: 5,
  },
});
