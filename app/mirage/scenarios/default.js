export default function (server) {
  let project = server.create('project');
  let commits = server.createList('commit', 20, { project_id: project.id });
  let builds = commits.map((commit) => server.create('build', { project_id: project.id, commit_id: commit.id }));
  let jobs = builds.map((build) =>
      server.create('job', {
        project_id: project.id,
        build_id: build.id,
        commit_id: build.commit_id
      })
  );

  jobs.forEach((job) => {
    let build = builds.findBy('id', job.build_id);

    build.job_id = job.id;
  });
}
