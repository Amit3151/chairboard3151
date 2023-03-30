import { useState } from 'react';

const mockData = {
  Agents: new Array(10).fill(0).map((_, i) => ({
    id: i,
    agent: {
      name: `Vishal Jadhav ${i}`,
      phone: getRandomInt(8888888888, 9999999999),
    },
  })),
};

function Test() {
  const [searchText, setSearchText] = useState('');
  const [filteredAgents, setFilteredAgents] = useState(mockData.Agents);
  const [selectedAgents, setSelectedAgents] = useState([]);

  function handleSearchChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);
    const filteredAgents = mockData.Agents.filter(agent => {
      const nameMatch = agent.agent.name.toLowerCase().includes(searchText.toLowerCase());
      const phoneMatch = agent.agent.phone.toString().includes(searchText);
      return nameMatch || phoneMatch;
    });
    setFilteredAgents(filteredAgents);
  }

  function handleAgentSelect(agentId) {
    const index = selectedAgents.indexOf(agentId);
    if (index === -1) {
      setSelectedAgents([...selectedAgents, agentId]);
    } else {
      setSelectedAgents([...selectedAgents.slice(0, index), ...selectedAgents.slice(index + 1)]);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchText} onChange={handleSearchChange} />
      <ul>
        {filteredAgents.map(agent => (
          <li key={agent.id}>
            <input type="checkbox" checked={selectedAgents.includes(agent.id)} onChange={() => handleAgentSelect(agent.id)} />
            {agent.agent.name} ({agent.agent.phone})
          </li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>sr. no</th>
            <th>Agent Id</th>
            <th>Agent Name</th>
            <th>Agent Phone</th>
          </tr>
        </thead>
        <tbody>
          {selectedAgents.length === 0
            ? mockData.Agents.map((agent, index) => (
                <tr key={agent.id}>
                  <td>{index + 1}</td>
                  <td>{agent.id}</td>
                  <td>{agent.agent.name}</td>
                  <td>{agent.agent.phone}</td>
                </tr>
              ))
            : mockData.Agents.filter(agent => selectedAgents.includes(agent.id)).map((agent, index) => (
                <tr key={agent.id}>
                  <td>{index + 1}</td>
                  <td>{agent.id}</td>
                  <td>{agent.agent.name}</td>
                  <td>{agent.agent.phone}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
export default Test;