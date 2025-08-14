from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task

from crewai_tools  import SerperDevTool, ScrapeWebsiteTool

@CrewBase
class AgentCrew():
    """Definition of the agents in the crew"""

    agents_config = 'src/agents/config/agents.yaml'
    tasks_config = 'src/agents/config/tasks.yaml'

    @agent
    def reasoner(self) -> Agent:
        return Agent(
            config = self.agents_config['reasoner'],

        )
    
    @agent
    def researcher(self) -> Agent:
        return Agent(
            config = self.agents_config['researcher'],
            tools = [SerperDevTool(), ScrapeWebsiteTool()],
            verbose = True,
        )
    
    @agent
    def reporter(self) -> Agent:
        return Agent(
            config = self.agents_config['reporter'],
        )
    
    @task
    def reasoner(self) -> Task:
        return Task(
            config = self.tasks_config['reasoning_task'],
            output_file = './tmp/reason_output_1.jsons',
        )
    
    @task
    def reasoner(self) -> Task:
        return Task(
            config = self.tasks_config['reasoning_task'],
            output_file = './tmp/reason_output_1.jsons',
        )




