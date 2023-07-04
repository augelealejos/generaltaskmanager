import { StyleSheet, StatusBar } from 'react-native';

export const colors = {
  primary: '#345995ff',
  secondary: '#ffcae9ff',
  soft_primary: '#d8ddefff',
  success: '#03cea4ff',
  danger: '#fb4d3dff',
  black: '#000000ff',
  white: '#ffffffff'
}

export const styles = StyleSheet.create({
  safeArea:
  {
    flex: 1
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 0.95,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: colors.primary,
    height: 37,
    borderColor: colors.primary
  },
  listContainer: {
    marginTop: 25
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.soft_primary,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: colors.soft_primary,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  taskText: {
    fontSize: 15,
    color: colors.primary
  },
  list: {
    gap: 15,
    paddingBottom: 20,
    paddingTop: 10
  },
  icon: {
    color: colors.danger,
    fontSize: 16,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 10,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: colors.primary,
  },
  selectedTask: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
});
