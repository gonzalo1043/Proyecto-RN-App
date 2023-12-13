import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: 70
  },
  inputAndButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    width: "100%",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 5,
    
  },
  itemsContainer: {
    width: "100%",
    marginTop: 20
  },
  cardProduct: {
    flexDirection: "row",
    padding: 10,
    margin: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10
  }, 
  cardTitle: {
    fontSize: 18
  },
  ModalPrincipalContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  modalContainer: {
    width: '80%',
    borderWidth: 1,
    padding: 25,
    gap: 10
  }, 
  ModalText: {
    textAlign: "center",
  }
});
