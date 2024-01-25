import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// A helper function to get date.
const getDate = (currentDate) => {
  // Split the string into an array of words.
  var wordsArray = currentDate.split(/\s+/);

  // Extract words from index 1 to 4.
  var extractedWords = wordsArray.slice(1, 4);

  // Concatenate the extracted words into a single string 
  // separated by whitespace.
  var formattedDate = extractedWords.join(" ");

  return formattedDate;
}

const DashboardScreen = () => {
  const [milestone, setMilestone] = useState('')
  const [selectedMilestone, setSelectedMilestone] = useState(null)
  const [milestones, setMilestones] = useState([]);
  const textInputReference = React.useRef(null);

  // Retrieves milestone list from storage.
  React.useEffect(() => {
    (async () => {
      try {
        const milestones = await AsyncStorage.getItem('milestones');
        setMilestones(milestones === null ? [] : JSON.parse(milestones));
      } catch (e) { }
    })();
  }, []);

  // Saves milestone list to storage.
  React.useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem('milestones', JSON.stringify(milestones));
      } catch (e) { }
    })();
  }, [milestones]);


  const handleAddMilestone = () => {
    if (milestone === '') {
      return;
    }

    // Create a new milestone object.
    let newMilestone = {
      id: Date.now().toString(),
      milestoneTitle: milestone,
      date: getDate(Date()),
    }


    setMilestones([...milestones, newMilestone]);

    // Clear the input field
    setMilestone('')
    textInputReference.current.clear();
  }

  const handleDeleteMilestone = (id) => {
    // Return a new list that does not include the one
    // with the current id.
    const newMilestoneList = milestones.filter(
      (milestone) => milestone.id !== id
    );

    // Set milestoneList to this new list.
    setMilestones(newMilestoneList);
  }

  const handleEditMilestone = (milestone) => {
    setSelectedMilestone(milestone);
    setMilestone(milestone.milestoneTitle);
  }

  const handleSaveMilestone = () => {
    const updatedMilestone = milestones.map(
      (item) => {
        if(item.id === selectedMilestone.id){
          return {...item, milestoneTitle: milestone}
        }
        return item
      }
    );
    setMilestones(updatedMilestone);
    setSelectedMilestone(null);
    setMilestone("");
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.milestoneItem}
    >
      <View style={{flex:1}}>
      <Text style={styles.milestoneContent}>{item.milestoneTitle}</Text>
      <Text style={styles.milestoneContent}>{item.date}</Text>
      </View>
      <IconButton
        icon={"pencil"}
        onPress={() => handleEditMilestone(item)}
      />
      <IconButton
        icon={"trash-can"}
        onPress={() => handleDeleteMilestone(item.id)}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} >

      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Dashboard</Text>
      </View>

      {/* Input for Baby's Milestone */}
      <TextInput
        ref={textInputReference}
        style={styles.textInput}
        value={milestone}
        onChangeText={setMilestone}
        placeholder={'Enter baby\'s milestone'}
      />

      {/* Add Milestone Button */}
      {selectedMilestone ?
        (<TouchableOpacity onPress={handleSaveMilestone} style={styles.addButton}>
          <Text style={styles.buttonText}>Save Milestone</Text>
        </TouchableOpacity>)
        : (<TouchableOpacity onPress={handleAddMilestone} style={styles.addButton}>
          <Text style={styles.buttonText}>Add Milestone</Text>
        </TouchableOpacity>)
      }


      {/* Milestone List */}
      {milestones.length > 0 &&
        <FlatList
          data={milestones}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.milestoneList}
        />}

      {milestones.length == 0 &&
        <View>
          <Text>
            <LottieView
              source={require('../../assets/emptyList.json')}
              autoPlay loop
              style={styles.lottieImage}
            />,
          </Text>
          <Text style={styles.footerText}>Welcome! Start Adding your baby's milestones.</Text>
        </View>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'teal',
  },
  headerRow: {
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'white',
    height: 50,
    marginVertical: 20,
    padding: 10,
    textAlign: 'center',
    borderRadius: 6,
    fontSize: 20,
  },
  milestoneList: {
    marginBottom: 20,
  },
  milestoneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#EDEFEE',
    borderRadius: 8,
  },
  milestoneContent: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  addButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lottieImage: {
    width: 400,
    height: 400,
  },
  footerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default DashboardScreen;
