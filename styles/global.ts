import { Dimensions, StyleSheet } from 'react-native';

export const globlaStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FB',
    justifyContent: 'center',
    marginTop: 30,
  },
  tasksContainer: {
    flex: 2,
    paddingHorizontal: 8,
  },
  mainInput: {
    borderColor: '#0575F2',
    fontSize: 24,
    paddingLeft: 4,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1.5,
    width: Dimensions.get('window').width / 1.4,
  },
  taskInput: {
    width: Dimensions.get('window').width / 1.4,
    fontSize: 20,
  },
  deleteButton: {
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finishTaskbutton: {
    height: 25,
    width: 25,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39A20A',
  },
  unfinishTaskbutton: {
    height: 25,
    width: 25,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#d7d7d7',
    borderWidth: 1,
  },
  taskContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
  buttonAddTask: {
    width: 52,
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0575F2',
  }
});