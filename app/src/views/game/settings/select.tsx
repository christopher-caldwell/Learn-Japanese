import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { DropDownItem } from '@/components/shared/drop-down'

type Props = {}
export default class App extends Component<Props> {
  state = {
    contents: [
      {
        title: 'Title 1',
        body: 'Hi. I love this component. What do you think?',
      },
      {
        title: 'See this one too',
        body: 'Yes. You can have more items.',
      },
      {
        title: 'Thrid thing',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
          {this.state.contents
            ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    isInitiallyOpen={false}
                    label={
                      <View style={styles.header}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'blue',
                          }}
                        >
                          {param.title}
                        </Text>
                      </View>
                    }
                  >
                    <Text
                      style={[
                        styles.txt,
                        {
                          fontSize: 20,
                        },
                      ]}
                    >
                      {param.body}
                    </Text>
                  </DropDownItem>
                )
              })
            : null}
          <View style={{ height: 96 }} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontSize: 14,
  },
})
